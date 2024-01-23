// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmQCK5Sw554Nlx7tY_L5A2xHFi6BMTMGk",
  authDomain: "netflix-2b6b8.firebaseapp.com",
  projectId: "netflix-2b6b8",
  storageBucket: "netflix-2b6b8.appspot.com",
  messagingSenderId: "380055537019",
  appId: "1:380055537019:web:b31b83d3af9f550432e9de",
  measurementId: "G-BFP1XFNBNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();