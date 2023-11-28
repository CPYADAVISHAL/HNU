import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBWQycwig0INJsvgyiaXBQnf0e5CbZNyJo",
    authDomain: "hnuniversity-58afc.firebaseapp.com",
    projectId: "hnuniversity-58afc",
    storageBucket: "hnuniversity-58afc.appspot.com",
    messagingSenderId: "358435812490",
    appId: "1:358435812490:web:ea4e05a19b497e7a1da973",
    measurementId: "G-CGQBSMNDDR",
    databaseURL:"https://hnuniversity-58afc-default-rtdb.firebaseio.com/", 
  };
  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();