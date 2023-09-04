// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUQNh6Y7ZBsMKcQZPTZYSz9owPqeOCh9o",
  authDomain: "saki-c4720.firebaseapp.com",
  databaseURL: "https://saki-c4720-default-rtdb.firebaseio.com",
  projectId: "saki-c4720",
  storageBucket: "saki-c4720.appspot.com",
  messagingSenderId: "146429433884",
  appId: "1:146429433884:web:df97507d8fdadc5fc967d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export{auth,db}