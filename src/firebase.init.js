// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_GBEd6xcOJTOJ-jkpHNGY9L4Q6HLDXg",
  authDomain: "inventorymanagementwebsite.firebaseapp.com",
  projectId: "inventorymanagementwebsite",
  storageBucket: "inventorymanagementwebsite.appspot.com",
  messagingSenderId: "717872911698",
  appId: "1:717872911698:web:28c85f8d8cfb63d061d68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
