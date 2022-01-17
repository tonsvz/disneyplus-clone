import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtewYTQyk6UvSO0whcksZvxuBVJgA9MYE",
  authDomain: "disneyplus-clone-f5c8e.firebaseapp.com",
  projectId: "disneyplus-clone-f5c8e",
  storageBucket: "disneyplus-clone-f5c8e.appspot.com",
  messagingSenderId: "431116890072",
  appId: "1:431116890072:web:b712544bc2032b0cd6ccad",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
export { auth, db, provider };

export default db; // Global Object
