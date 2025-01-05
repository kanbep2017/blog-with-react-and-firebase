import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAU3zXEUCzDbTCf4ArwBUuUSVEDDPiadaE",
    authDomain: "blog-54289.firebaseapp.com",
    projectId: "blog-54289",
    storageBucket: "blog-54289.firebasestorage.app",
    messagingSenderId: "164966415796",
    appId: "1:164966415796:web:7fdcf8fb2bc7a68a38c6e1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };


