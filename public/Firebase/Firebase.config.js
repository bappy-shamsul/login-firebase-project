// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiYLC0EIxpc079AMcHXiYS82pCnLz8NQc",
  authDomain: "log-in-project-8ea53.firebaseapp.com",
  projectId: "log-in-project-8ea53",
  storageBucket: "log-in-project-8ea53.firebasestorage.app",
  messagingSenderId: "1078202084037",
  appId: "1:1078202084037:web:82e396eac6fe63aad85eac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth