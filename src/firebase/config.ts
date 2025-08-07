import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1rC-5qco4Wfebo6IOwpm6XYp5Jug0oBA",
  authDomain: "fitness-tracker-challeng-e4680.firebaseapp.com",
  projectId: "fitness-tracker-challeng-e4680",
  storageBucket: "fitness-tracker-challeng-e4680.firebasestorage.app",
  messagingSenderId: "877078349683",
  appId: "1:877078349683:web:7dc6fd0ce618b6884ca706",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
