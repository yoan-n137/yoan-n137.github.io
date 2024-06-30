import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYfYVdXUq65P0lI-G4HgT93qKXkco3fmM",
  authDomain: "question-aec13.firebaseapp.com",
  projectId: "question-aec13",
  storageBucket: "question-aec13.appspot.com",
  messagingSenderId: "768713427658",
  appId: "1:768713427658:web:bbc9eaad5e53810dd24233",
  measurementId: "G-ZX74L33TZ5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
