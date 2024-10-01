// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIO3DGZ57hnKa9JUKEzZZfP1voQKK4nfM",
  authDomain: "vite-contact-app-6fb25.firebaseapp.com",
  projectId: "vite-contact-app-6fb25",
  storageBucket: "vite-contact-app-6fb25.appspot.com",
  messagingSenderId: "279142975234",
  appId: "1:279142975234:web:7a47b37f67eb21f00fa41b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);