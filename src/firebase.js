import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAik32ArSFVZcfeFf5uD35QXVq2MmmTnpI",
  authDomain: "stock-demo-a227a.firebaseapp.com",
  databaseURL: "https://stock-demo-a227a.firebaseio.com",
  projectId: "stock-demo-a227a",
  storageBucket: "stock-demo-a227a.appspot.com",
  messagingSenderId: "717408269207",
  appId: "1:717408269207:web:6d0d1fe8a0ede4f52a0ad2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };