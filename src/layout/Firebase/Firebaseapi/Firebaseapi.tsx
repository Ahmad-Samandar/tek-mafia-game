import firebase from "firebase/compat/app";

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBGfcE31H4kBuEFDZDOPFIkYaEpNUSHH4w",
  authDomain: "tek-mafia-game.firebaseapp.com",
  projectId: "tek-mafia-game",
  storageBucket: "tek-mafia-game.appspot.com",
  messagingSenderId: "901959525362",
  appId: "1:901959525362:web:3a12b50a22b1165bf0016b",
  measurementId: "G-WBWDY0FC9S"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };