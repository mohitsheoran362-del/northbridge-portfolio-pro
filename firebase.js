import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDu8L2Yv4LYqJm4qNpd1VjrQIuhgUtCWE8",
  authDomain: "friends-memories-b9f6c.firebaseapp.com",
  projectId: "friends-memories-b9f6c",
  storageBucket: "friends-memories-b9f6c.firebasestorage.app",
  messagingSenderId: "268015715511",
  appId: "1:268015715511:web:6613bf8cb096070b3af932",
  measurementId: "G-SE0PGS2BB2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);