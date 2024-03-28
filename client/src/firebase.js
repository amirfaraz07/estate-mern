// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9aca8.firebaseapp.com",
  projectId: "mern-estate-9aca8",
  storageBucket: "mern-estate-9aca8.appspot.com",
  messagingSenderId: "406191869854",
  appId: "1:406191869854:web:6cc2fd85c95febef01108f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);