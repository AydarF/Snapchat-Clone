import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "snapchat-clone-5f492.firebaseapp.com",
  projectId: "snapchat-clone-5f492",
  storageBucket: "snapchat-clone-5f492.appspot.com",
  messagingSenderId: "663933430341",
  appId: "1:663933430341:web:b548ffafc85e6c0772d12c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
