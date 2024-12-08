import React, { useEffect, useState } from 'react';
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import BackButton from './BackButton';

const DeniedEvents = () => {
  const [deniedEvents, setDeniedEvents] = useState([]);

  useEffect(() => {
    // Real-time listener for denied events
    const unsubscribe = onSnapshot(collection(db, "requested_events"), (snapshot) => {
      const events = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((event) => event.status === "denied"); // Filter denied events
      setDeniedEvents(events);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="mt-4">
      <BackButton/>
      <h2 className="flex justify-center text-2xl font-bold mb-4">Denied Events</h2>
      <ul>
        {deniedEvents.map((event) => (
          <li key={event.id} className="p-4 border-b border-gray-200">
             {event.reason && <p className="text-red-500">Reason: {event.reason}</p>}
             <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-lg"><span className="text-lg font-semibold">Description:&emsp;</span>{event.description}</p>
              <p className="text-lg"><span className="text-lg font-semibold">Date:&emsp;</span>{event.date}</p>
              <p className="text-lg"><span className="text-lg font-semibold">  Time:&emsp;</span>{event.startTime}&emsp;-&emsp; {event.endTime}</p>
              <p className="text-lg">
                <span className="text-lg font-semibold">Contact Person Name: &emsp;</span>{event.contactName}
              </p>
              <p className="text-lg">
                <span className="text-lg font-semibold">Contact Person Email:&emsp;</span>{event.contactEmail}
              </p>
              <p className="text-lg">
                <span className="text-lg font-semibold">Contact Phone Number:&emsp;</span>{event.contactPhone}
              </p>
              <p>
                {event.posterUrl ? (
                  <img src={event.posterUrl} alt="Event Poster" className="w-full h-auto max-w-xs" onError={(e) => e.target.src = '/path/to/placeholder-image.jpg'} />
                ) : (
                  <span className="text-black">No poster</span>
                )}
              </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeniedEvents;
