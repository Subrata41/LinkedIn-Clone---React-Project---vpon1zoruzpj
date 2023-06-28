import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./config";

// Initialize Firebase with the provided configuration
firebase.initializeApp(firebaseConfig);

// Create references to Firebase services
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// Export the references to the Firebase services
export { auth, provider, storage };

// Export the Firestore reference as the default export
export default db;
