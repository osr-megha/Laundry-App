// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhpoFJl3PsbYEql79EOcjjrs-MOiV1BSg",
  authDomain: "laundry-app-4ab9c.firebaseapp.com",
  projectId: "laundry-app-4ab9c",
  storageBucket: "laundry-app-4ab9c.appspot.com",
  messagingSenderId: "1024859721028",
  appId: "1:1024859721028:web:cc21748607f1a08d44db11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth, db};