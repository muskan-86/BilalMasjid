import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc, setDoc 
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import BackButton from './BackButton';
import { useAnnouncements } from '../context/AnnouncementContext';

const AnnouncementUpdate = () => {
    const { announcements, setAnnouncements } = useAnnouncements();
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', imageUrl: '' });
    const [imageFile, setImageFile] = useState(null);
    const [isAnnouncementEnabled, setIsAnnouncementEnabled] = useState(false);

    // Fetch announcements and status from Firestore
    const fetchAnnouncements = async () => {
        const querySnapshot = await getDocs(collection(db, 'announcements'));
        const fetchedAnnouncements = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setAnnouncements(fetchedAnnouncements);
    };

    const fetchAnnouncementStatus = async () => {
        const statusDoc = doc(db, 'settings', 'announcementStatus');
        const docSnap = await getDoc(statusDoc);
        if (docSnap.exists()) {
            setIsAnnouncementEnabled(docSnap.data().enabled);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
        fetchAnnouncementStatus(); // Fetch checkbox status from Firestore
    }, []);

    const handleCheckboxChange = async () => {
        const newStatus = !isAnnouncementEnabled;
        setIsAnnouncementEnabled(newStatus);
        await setDoc(doc(db, 'settings', 'announcementStatus'), { enabled: newStatus });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const uploadImage = async () => {
        if (!imageFile) return null;

        const storage = getStorage();
        const storageRef = ref(storage, `announcements/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        return await getDownloadURL(storageRef);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageUrl = await uploadImage();
        if (newAnnouncement.title && imageUrl) {
            const announcement = { title: newAnnouncement.title, imageUrl };
            const docRef = await addDoc(collection(db, 'announcements'), announcement);

            setAnnouncements((prev) => [...prev, { id: docRef.id, ...announcement }]);
            setNewAnnouncement({ title: '', imageUrl: '' });
            setImageFile(null);
        } else {
            alert('Please provide both a title and an image.');
        }
    };

    const handleDeleteAnnouncement = async (id) => {
        await deleteDoc(doc(db, 'announcements', id));
        setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    };

   

    return (
        <div className='mt-4'>
            <BackButton />
            <div className="p-6 min-h-screen flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-6">Manage Announcements</h1>

                {/* Checkbox for enabling/disabling announcements */}
                <label className="flex items-center gap-2 mb-6">
                    <input
                        type="checkbox"
                        checked={isAnnouncementEnabled}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5"
                    />
                    <span className="text-lg">Enable Announcements on Home Page</span>
                </label>

                <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md w-full max-w-md mb-6">
                    <input
                        type="text"
                        placeholder="Announcement Title"
                        value={newAnnouncement.title}
                        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                        className="w-full p-2 mb-2 border rounded"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full mb-2 border rounded"
                    />
                    <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                        Add Announcement
                    </button>
                </form>

                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Current Announcements</h2>
                    {announcements.length > 0 ? (
                        announcements.map((announcement, index) => (
                            <div key={announcement.id} className="bg-white p-4 mb-2 rounded shadow-md flex items-center justify-between">
                                <div>
                                    <p className="font-bold">{announcement.title}</p>
                                    <img src={announcement.imageUrl} alt={announcement.title} className="h-16 w-16 object-cover mt-2" />
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleDeleteAnnouncement(announcement.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No announcements available. Please add one.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnnouncementUpdate;
