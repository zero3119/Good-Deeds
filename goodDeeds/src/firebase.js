// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: key,
  authDomain: "gooddeeds-6d8ba.firebaseapp.com",
  projectId: "gooddeeds-6d8ba",
  storageBucket: "gooddeeds-6d8ba.appspot.com",
  messagingSenderId: "115566348601",
  appId: "1:115566348601:web:de92f9ef4957110b8000e8",
  measurementId: "G-09TPYNYGFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);


export { auth };
