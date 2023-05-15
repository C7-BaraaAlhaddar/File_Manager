// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-kJ-W77gTFOp0aHJsdcLzsewteyfmNyU",
  authDomain: "file-manger-514ef.firebaseapp.com",
  projectId: "file-manger-514ef",
  storageBucket: "file-manger-514ef.appspot.com",
  messagingSenderId: "425743855772",
  appId: "1:425743855772:web:24df5ff3c182c83e50bd59",
  measurementId: "G-6T6WKGQJ8Z",
  databaseURL: "https://file-manger-514ef.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  storage,
  collection,
  addDoc,
};
