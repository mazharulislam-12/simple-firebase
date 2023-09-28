// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvhX0ci8eXVkzbxEdJcJhMdPkivL3-U8E",
  authDomain: "simple-firebase-5b26a.firebaseapp.com",
  projectId: "simple-firebase-5b26a",
  storageBucket: "simple-firebase-5b26a.appspot.com",
  messagingSenderId: "663882271643",
  appId: "1:663882271643:web:441403429e15a762052f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app