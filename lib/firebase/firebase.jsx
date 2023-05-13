// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBJl5KONkIu34SJAThoSpnaf8tsMAQecBc",
  authDomain: "assignment-alphabi.firebaseapp.com",
  projectId: "assignment-alphabi",
  storageBucket: "assignment-alphabi.appspot.com",
  messagingSenderId: "256751758503",
  appId: "1:256751758503:web:7b7b8b198c5828fea93f82",
  measurementId: "G-FZVZ4V14VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {db,auth};