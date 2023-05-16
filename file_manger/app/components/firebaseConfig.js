// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  arrayUnion,
  arrayRemove,
  doc,
  updateDoc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-kJ-W77gTFOp0aHJsdcLzsewteyfmNyU",
  authDomain: "file-manger-514ef.firebaseapp.com",
  projectId: "file-manger-514ef",
  storageBucket: "file-manger-514ef.appspot.com",
  messagingSenderId: "425743855772",
  appId: "1:425743855772:web:24df5ff3c182c83e50bd59",
  measurementId: "G-6T6WKGQJ8Z",
};

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
  uploadBytes,
  ref,
  getDownloadURL,
  arrayUnion,
  arrayRemove,
  updateDoc,
  doc,
  query,
  where,
  getDoc,
  getDocs,
};
