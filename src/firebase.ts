import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBq5FZaYLS1--O-34C3Fi3y9_gVfI7V-w4",
    authDomain: "sharpe-app-288ae.firebaseapp.com",
    databaseURL: "https://sharpe-app-288ae-default-rtdb.firebaseio.com",
    projectId: "sharpe-app-288ae",
    storageBucket: "sharpe-app-288ae.appspot.com",
    messagingSenderId: "370126326592",
    appId: "1:370126326592:web:d5ec07e72a3484262dc8a5",
    measurementId: "G-G6YHVMSLZK"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);