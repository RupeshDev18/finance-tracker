// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi49WXBu-YhfVWJ7oy-zoiQ6PBFdueLfM",
  authDomain: "finance-tracker-c647c.firebaseapp.com",
  projectId: "finance-tracker-c647c",
  storageBucket: "finance-tracker-c647c.appspot.com",
  messagingSenderId: "393423529129",
  appId: "1:393423529129:web:b77d8982bc95ce75c4f5b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
