// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk2kopf3ITsVSusMCXCrvWKwQv3ugcxJQ",
    authDomain: "project-1644269729186140646.firebaseapp.com",
    projectId: "project-1644269729186140646",
    storageBucket: "project-1644269729186140646.appspot.com",
    messagingSenderId: "368289316001",
    appId: "1:368289316001:web:f77af4e4e24dd42d2704e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app);
