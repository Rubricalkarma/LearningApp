// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1hhD3NcUcjA9StwXx6siILf_vCxzg5RQ",
  authDomain: "learningapp-6dbe6.firebaseapp.com",
  projectId: "learningapp-6dbe6",
  storageBucket: "learningapp-6dbe6.appspot.com",
  messagingSenderId: "446214632758",
  appId: "1:446214632758:web:531646d544ddc4378d6f97",
  measurementId: "G-M4NKDY2TFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;