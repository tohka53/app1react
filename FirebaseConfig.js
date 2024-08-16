// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-RiSoeacajgly9KiHqmBxDw9Hr0hLyAQ",
  authDomain: "boxconfirm-3a6c7.firebaseapp.com",
  projectId: "boxconfirm-3a6c7",
  storageBucket: "boxconfirm-3a6c7.appspot.com",
  messagingSenderId: "926243874128",
  appId: "1:926243874128:web:630d4f63928d0fb1c7b855",
  measurementId: "G-QNPQX66JH9",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
