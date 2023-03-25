import firebase from './firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDcjXRFLslb4RCKkIH2m3rUHVJGuFyGZKw",
  authDomain: "linkedin-clone-5a055.firebaseapp.com",
  databaseURL: "https://linkedin-clone-5a055-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-5a055",
  storageBucket: "linkedin-clone-5a055.appspot.com",
  messagingSenderId: "452191731768",
  appId: "1:452191731768:web:3a86bf0e3e8b8d39cca6cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;