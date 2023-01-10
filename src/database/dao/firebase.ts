import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZPxQP4DQxWjvZTcKktozN8bjd8nv6XQQ",
  authDomain: "loginp-5227e.firebaseapp.com",
  projectId: "loginp-5227e",
  storageBucket: "loginp-5227e.appspot.com",
  messagingSenderId: "614032375989",
  appId: "1:614032375989:web:fc1b1a212abd71ae8cfefc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);