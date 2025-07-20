// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbquXASSwe8tbFWnf9rehZn-JscV8mr5U",
  authDomain: "dragon-news-6fbdc.firebaseapp.com",
  projectId: "dragon-news-6fbdc",
  storageBucket: "dragon-news-6fbdc.firebasestorage.app",
  messagingSenderId: "293863080009",
  appId: "1:293863080009:web:70b5cf675bdb05f3213f98",
  measurementId: "G-046E03R3BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
