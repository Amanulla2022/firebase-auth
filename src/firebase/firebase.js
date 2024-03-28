// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU8JWYPrtYBxPBgzUlG8F3krCPVTw1D5M",
  authDomain: "intro-to-firebase-7b709.firebaseapp.com",
  projectId: "intro-to-firebase-7b709",
  storageBucket: "intro-to-firebase-7b709.appspot.com",
  messagingSenderId: "988401646073",
  appId: "1:988401646073:web:654a257dde4ae1bad2e528",
  measurementId: "G-QK0KTQ8P71",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize firebase Authentication and get a reference to the service
export const auth = getAuth(app);
