import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyD-KtheHYmhrj2T5FDacV075S1O459mbB0",
  authDomain: "loginorganojudicial.firebaseapp.com",
  projectId: "loginorganojudicial",
  storageBucket: "loginorganojudicial.appspot.com",
  messagingSenderId: "427460195741",
  appId: "1:427460195741:web:b5dd1197ed72f6dc56ab74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


