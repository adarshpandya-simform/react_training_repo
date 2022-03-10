import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBWWi6QGlANvzQylO0FuTFj57adWQk008U",
  authDomain: "react-photos-81653.firebaseapp.com",
  projectId: "react-photos-81653",
  storageBucket: "react-photos-81653.appspot.com",
  messagingSenderId: "505357593940",
  appId: "1:505357593940:web:ab25622a1d7300c1f62cc1",
});

export const getStorage = firebaseConfig.storage();
