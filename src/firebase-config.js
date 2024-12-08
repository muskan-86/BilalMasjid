import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth  } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS_X0giYYXV7i0zg4k2qsr4wp33YNkxic",
  authDomain: "bilalmasjid-146db.firebaseapp.com",
  projectId: "bilalmasjid-146db",
  storageBucket: "bilalmasjid-146db.appspot.com",
  messagingSenderId: "1018138418350",
  appId: "1:1018138418350:web:05c84a99823d755527a13f",
  // measurementId: "G-RKRBX1HYY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Firestore with cache disabled
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({sizeBytes: 0})
});
const storage = getStorage(app);


export { app, auth, db,storage };


