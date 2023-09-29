// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP_q-XfPyEZf8JhDWkUtoW0d0H5cBMdlE",
  authDomain: "ads-group-3e3bc.firebaseapp.com",
  projectId: "ads-group-3e3bc",
  storageBucket: "ads-group-3e3bc.appspot.com",
  messagingSenderId: "143763099354",
  appId: "1:143763099354:web:215efb3fd1bb419a075fe3",
  measurementId: "G-00EGZ0DR20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);