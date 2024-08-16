// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBWqweN7thcIUvw8cS3RDYWZbWi1tkFmA",
  authDomain: "inventory-tracker-1b909.firebaseapp.com",
  projectId: "inventory-tracker-1b909",
  storageBucket: "inventory-tracker-1b909.appspot.com",
  messagingSenderId: "654419860797",
  appId: "1:654419860797:web:ea0668c6b1d9dd7ca4b954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);