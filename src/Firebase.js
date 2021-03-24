import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJWotm3aObf8Rw0F9YelegLhTmAAdEZ4M",
  authDomain: "wattsapp-2ff7e.firebaseapp.com",
  databaseURL: "https://wattsapp-2ff7e-default-rtdb.firebaseio.com",
  projectId: "wattsapp-2ff7e",
  storageBucket: "wattsapp-2ff7e.appspot.com",
  messagingSenderId: "816081865233",
  appId: "1:816081865233:web:cea9211e40549abf987fb0",
  measurementId: "G-2GTBD1SFJX"
};

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;