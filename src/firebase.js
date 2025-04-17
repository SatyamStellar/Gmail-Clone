import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz7QVq362jyLFpaP9NNNT75FLHIYqPkag",
  authDomain: "gmial-48ff2.firebaseapp.com",
  projectId: "gmial-48ff2",
  storageBucket: "gmial-48ff2.firebasestorage.app",
  messagingSenderId: "993405293505",
  appId: "1:993405293505:web:f7b823255749a8d4039540",
  measurementId: "G-T6VTMS8C7R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
