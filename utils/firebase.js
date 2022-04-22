import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import "firebase/firestore"
const config = {
  apiKey: "AIzaSyBurEEwzoN73CqEVnKJ_9Kf38O7T7BTtB0",
  authDomain: "ulteventest.firebaseapp.com",
  projectId: "ulteventest",
  storageBucket: "ulteventest.appspot.com",
  messagingSenderId: "1053682466818",
  appId: "1:1053682466818:web:172195836fdf3044d4271b",
  measurementId: "G-NZX6F60LT1"
};

// Initialize Firebase 
export const app = initializeApp(config);
export const db = getFirestore(app);
console.log("Firebase initialisé avec success");
// const analytics = getAnalytics(app);888
