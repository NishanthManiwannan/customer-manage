// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database'

import { initializeApp } from "firebase/app";
import  {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAsghkJiOxL8OA84_higBJeXZDKSzgblIw",
    authDomain: "customer-management-9eb2c.firebaseapp.com",
    projectId: "customer-management-9eb2c",
    storageBucket: "customer-management-9eb2c.appspot.com",
    messagingSenderId: "990320651719",
    appId: "1:990320651719:web:eb8f4b98210eada6f43de2",
    measurementId: "G-8LWPP5J8C3"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)