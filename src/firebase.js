// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlSwnM-5Nh8TwMLAMZW7k1ujft6_IwxZw",
  authDomain: "techtask69.firebaseapp.com",
  projectId: "techtask69",
  storageBucket: "techtask69.appspot.com",
  messagingSenderId: "172604206626",
  appId: "1:172604206626:web:057e61baddb5a36a49647b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);