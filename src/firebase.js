import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9bcVVqKRwaZ1Dc7lWGih4B3gUXWQv3hk",
  authDomain: "sprint4socialmedia.firebaseapp.com",
  projectId: "sprint4socialmedia",
  storageBucket: "sprint4socialmedia.appspot.com",
  messagingSenderId: "249099432565",
  appId: "1:249099432565:web:d80711cbabf623ef257e3c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export default firebaseApp;