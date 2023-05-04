import {getAuth} from "firebase/auth"
import { googleAuthProvider } from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDO2OEoOQb6JjUsQ4sR_WCR3rWzLvnXvW0",
  authDomain: "redux-auth-social-media.firebaseapp.com",
  projectId: "redux-auth-social-media",
  storageBucket: "redux-auth-social-media.appspot.com",
  messagingSenderId: "1062511902840",
  appId: "1:1062511902840:web:b9a948fa15180c68f8ad8d",
  measurementId: "G-RMX6VQQDGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(); 
const provider = googleAuthProvider(); 

export { app, provider, auth }; 

