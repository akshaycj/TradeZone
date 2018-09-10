import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDkXtaET-W9sM9IhnERFf7GKefzxhGGk28",
  authDomain: "tradezone-906ac.firebaseapp.com",
  databaseURL: "https://tradezone-906ac.firebaseio.com",
  projectId: "tradezone-906ac",
  storageBucket: "tradezone-906ac.appspot.com",
  messagingSenderId: "540016305028"
};
firebase.initializeApp(config);

export const storage = firebase.storage();
