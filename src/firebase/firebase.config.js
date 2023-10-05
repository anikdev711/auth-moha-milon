// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ebphwY-aYOjVJgq4R0yV7eWzfko9ksc",
  authDomain: "auth-moha-milon-c1ae3.firebaseapp.com",
  projectId: "auth-moha-milon-c1ae3",
  storageBucket: "auth-moha-milon-c1ae3.appspot.com",
  messagingSenderId: "552156756160",
  appId: "1:552156756160:web:c720e1b447d307a34e5525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;