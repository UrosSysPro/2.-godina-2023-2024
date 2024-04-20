import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    doc, 
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCEUPkpRIOLHN7k8EeXsO1BWw2ZwNUWe0",
    authDomain: "notes-b4d17.firebaseapp.com",
    projectId: "notes-b4d17",
    storageBucket: "notes-b4d17.appspot.com",
    messagingSenderId: "111999496517",
    appId: "1:111999496517:web:4943896ab456ad6f360e2c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);