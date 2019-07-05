import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJQV_JEqtB29enrtAW__SFbQhj70sYiYg",
  authDomain: "revents-ef039.firebaseapp.com",
  databaseURL: "https://revents-ef039.firebaseio.com",
  projectId: "revents-ef039",
  storageBucket: "revents-ef039.appspot.com",
  messagingSenderId: "326044135172",
  appId: "1:326044135172:web:7183c080e7ca732f"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
