import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDitDWs0bsBSEFxTBLM6XUVY0co2b3Ftsw",
  authDomain: "crud-fire-react-c373e.firebaseapp.com",
  projectId: "crud-fire-react-c373e",
  storageBucket: "crud-fire-react-c373e.appspot.com",
  messagingSenderId: "467746763132",
  appId: "1:467746763132:web:fbae2f3383b85d93bb74f9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)