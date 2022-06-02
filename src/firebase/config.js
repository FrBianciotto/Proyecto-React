// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjxFadHlBYLq-L2WL-of-UCW0Naqfmws",
  authDomain: "peperone-d68de.firebaseapp.com",
  projectId: "peperone-d68de",
  storageBucket: "peperone-d68de.appspot.com",
  messagingSenderId: "938622678670",
  appId: "1:938622678670:web:33af1d22a0d4bb40557bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}