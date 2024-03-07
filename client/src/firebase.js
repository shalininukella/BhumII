import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, addDoc, collection, getDoc, doc, increment, setDoc, updateDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuJG2c1JebTtCylDuTEuiArBH7Zde2CfU",
    authDomain: "team-20-8af87.firebaseapp.com",
    projectId: "team-20-8af87",
    storageBucket: "team-20-8af87.appspot.com",
    messagingSenderId: "359542983316",
    appId: "1:359542983316:web:4ca50871843b835fe28281",
    measurementId: "G-0MFBNK08K2"};
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);