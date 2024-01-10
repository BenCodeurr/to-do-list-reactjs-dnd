
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "todo-72507.firebaseapp.com",
  projectId: "todo-72507",
  storageBucket: "todo-72507.appspot.com",
  messagingSenderId: "617200185990",
  appId: "1:617200185990:web:28e85c966b047913f1d707"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();