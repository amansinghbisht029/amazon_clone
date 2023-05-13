// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsrx79_lI42pMAHM56wn_TaBlPIlih7m0",
  authDomain: "bisht-2a55e.firebaseapp.com",
  projectId: "bisht-2a55e",
  storageBucket: "bisht-2a55e.appspot.com",
  messagingSenderId: "609348456088",
  appId: "1:609348456088:web:d4b1543a26381dcabc8aed",
  measurementId: "G-MQ847S4P46",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig