// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log(process.env.FIREBASE_API_KEY)

const firebaseConfig = {
    apiKey: "AIzaSyBNdXkAqV_uxmjRXDFBZiY3o2stJD6mVFU",
  authDomain: "cineflix-react.firebaseapp.com",
  projectId: "cineflix-react",
  storageBucket: "cineflix-react.appspot.com",
  messagingSenderId: "30138154840",
  appId: "1:30138154840:web:23ad03dc8213f9aa2eef2d",
  measurementId: "G-V1G7WZFW4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

// const analytics = getAnalytics(app);