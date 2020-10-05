import firebase from "firebase";
import Config from "./config.js";

const firebaseConfig = Config.FIREBASE;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
