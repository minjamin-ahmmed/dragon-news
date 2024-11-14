// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAXh3gK3WWnwtKnhZp4tWKZahF43lJ9aw",
  authDomain: "dragon-news-auth-1f8c1.firebaseapp.com",
  projectId: "dragon-news-auth-1f8c1",
  storageBucket: "dragon-news-auth-1f8c1.firebasestorage.app",
  messagingSenderId: "904887315069",
  appId: "1:904887315069:web:eaf3ac4ddaceaac6ecdf14",
  measurementId: "G-W64WKNQ658",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
