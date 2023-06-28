// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoliQRQgrnOJzEFR04M6LrbcVvF-Y56kM",
  authDomain: "aplicacion-web-fda76.firebaseapp.com",
  projectId: "aplicacion-web-fda76",
  storageBucket: "aplicacion-web-fda76.appspot.com",
  messagingSenderId: "170467054122",
  appId: "1:170467054122:web:3e4bb1215e8745f44ae953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}
export default app;