import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBw6OyR26Yk8ptX4ZRXbliQ0e9U7DuAIY",
    authDomain: "visasg.firebaseapp.com",
    projectId: "visasg",
    storageBucket: "visasg.appspot.com",
    messagingSenderId: "932469220452",
    appId: "1:932469220452:web:5c00dc5032df94c1b96b71",
    measurementId: "G-3DBCYRZ2QM"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);