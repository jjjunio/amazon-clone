import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtOhbx1LY-GMiaIR1CqnWM4uy9HH6mats",
  authDomain: "clone-a6f70.firebaseapp.com",
  databaseURL: "https://clone-a6f70.firebaseio.com",
  projectId: "clone-a6f70",
  storageBucket: "clone-a6f70.appspot.com",
  messagingSenderId: "202335487388",
  appId: "1:202335487388:web:515ff570100777df803459",
  measurementId: "G-SW9YNY3SE9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
