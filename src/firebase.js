import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBgNasLVM5oUG4z6fEOQH3FDfe_HkS7QZc",
    authDomain: "minorproject-5c364.firebaseapp.com",
    projectId: "minorproject-5c364",
    storageBucket: "minorproject-5c364.appspot.com",
    messagingSenderId: "933469033299",
    appId: "1:933469033299:web:08bed8f9e19b29bb8187a6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };