// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5iiTvwERB69iY5YO0AYVB7oF0cWjOM-I",
  authDomain: "auth-firebase-context-ta-9fb58.firebaseapp.com",
  projectId: "auth-firebase-context-ta-9fb58",
  storageBucket: "auth-firebase-context-ta-9fb58.appspot.com",
  messagingSenderId: "381268847908",
  appId: "1:381268847908:web:252368b33621eb3cead7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app