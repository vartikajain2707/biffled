import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC4_YyHQ1qBkmmCDG0PyHYykyHtERdmGAM",
  authDomain: "biffled-app.firebaseapp.com",
  projectId: "biffled-app",
  storageBucket: "biffled-app.appspot.com",
  messagingSenderId: "80928407444",
  appId: "1:80928407444:web:8781fca86fa56760b15981",
  measurementId: "G-SVMZEZNZHQ"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const database=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default database;