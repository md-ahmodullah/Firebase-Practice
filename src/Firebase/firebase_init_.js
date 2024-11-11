// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOEpXTAPOYx7EWEfOxSRp7hWloph9vET0",
  authDomain: "fir-project-1-3dcc4.firebaseapp.com",
  projectId: "fir-project-1-3dcc4",
  storageBucket: "fir-project-1-3dcc4.firebasestorage.app",
  messagingSenderId: "582104070942",
  appId: "1:582104070942:web:35184b4fedc64d34db270f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
