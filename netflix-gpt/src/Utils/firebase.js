// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnJzhvs9CDJOo5TAffAhfC7wpW2KU5CJ8",
  authDomain: "netflixgpt-e5503.firebaseapp.com",
  projectId: "netflixgpt-e5503",
  storageBucket: "netflixgpt-e5503.firebasestorage.app",
  messagingSenderId: "686595913829",
  appId: "1:686595913829:web:ee35218274fa7747f92e8c",
  measurementId: "G-0MS2QG1BZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);