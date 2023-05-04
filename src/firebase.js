// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);