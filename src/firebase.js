import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC9sAieKfeqFxvndoW7M_qElA4qIM48V7E",
  authDomain: "drive-clone-22812.firebaseapp.com",
  projectId: "drive-clone-22812",
  storageBucket: "drive-clone-22812.appspot.com",
  messagingSenderId: "784641752967",
  appId: "1:784641752967:web:7ffaa51beeae3db9c15d22"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }