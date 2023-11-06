// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU651Upucs93PubY2pSOXjXzo-IITu4AU",
  authDomain: "home-repair-d1660.firebaseapp.com",
  projectId: "home-repair-d1660",
  storageBucket: "home-repair-d1660.appspot.com",
  messagingSenderId: "724842914302",
  appId: "1:724842914302:web:a4733d1318c6937936a0af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);