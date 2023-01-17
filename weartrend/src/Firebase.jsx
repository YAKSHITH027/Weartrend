import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "weartrend-d8366.firebaseapp.com",
  projectId: "weartrend-d8366",
  storageBucket: "weartrend-d8366.appspot.com",
  messagingSenderId: "654148757815",
  appId: "1:654148757815:web:fcf47357bcc7a5d3c1d2b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
