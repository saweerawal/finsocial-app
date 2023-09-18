// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9DAYUicj3MZTKLEFGmMQOs6Bwrn-nqAU",
  authDomain: "finsocial-5f514.firebaseapp.com",
  projectId: "finsocial-5f514",
  storageBucket: "finsocial-5f514.appspot.com",
  messagingSenderId: "918239501611",
  appId: "1:918239501611:web:6e5ccd243fd56fd687b96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };