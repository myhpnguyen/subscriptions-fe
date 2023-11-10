// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGV0drqfjzkt0ozsqgyzpgC6cNL7xMuU4",
  authDomain: "sampleproject-mn.firebaseapp.com",
  projectId: "sampleproject-mn",
  storageBucket: "sampleproject-mn.appspot.com",
  messagingSenderId: "301610943263",
  appId: "1:301610943263:web:3bdfb4af859252c038262a",
  measurementId: "G-K7D1QXWSY1"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default db.firestore();
