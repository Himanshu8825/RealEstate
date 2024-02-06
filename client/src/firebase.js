// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCs6LTCVrpWWljDiOEc-PhgaB8NpQQK1_c",
    authDomain: "estatemrn.firebaseapp.com" , 
    projectId: "estatemrn",
    storageBucket: "estatemrn.appspot.com",
    messagingSenderId: "2252095170",
    appId: "2252095170",
   
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);