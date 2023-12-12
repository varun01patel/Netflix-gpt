// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd-zoDOo-kxQEqgah5lZuc2v_cAS6xH-8",
  authDomain: "netflix-gpt-3ed7d.firebaseapp.com",
  projectId: "netflix-gpt-3ed7d",
  storageBucket: "netflix-gpt-3ed7d.appspot.com",
  messagingSenderId: "94738096369",
  appId: "1:94738096369:web:ba448e592b0c101d298950",
  measurementId: "G-N8NXEPZ9S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);