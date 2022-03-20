// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFV6PJLXMCSqvsPslv03FNg4fxSX5APWU",
  authDomain: "getir-todo-app-260af.firebaseapp.com",
  projectId: "getir-todo-app-260af",
  storageBucket: "getir-todo-app-260af.appspot.com",
  messagingSenderId: "876787922548",
  appId: "1:876787922548:web:1b91ab7f47016bdfae0321",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
