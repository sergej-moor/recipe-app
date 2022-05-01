// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ruSyTho3dgZC3T6aBUp2-uzIZUxUwrA",
  authDomain: "react-recipes-19eff.firebaseapp.com",
  projectId: "react-recipes-19eff",
  storageBucket: "react-recipes-19eff.appspot.com",
  messagingSenderId: "751761982454",
  appId: "1:751761982454:web:0b3af6517557e17549bdd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}