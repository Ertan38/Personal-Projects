// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDPMoaZHtISmgq4l774b244lZt8AqSnpxs",
    authDomain: "chatbot-authenticator-976ee.firebaseapp.com",
    projectId: "chatbot-authenticator-976ee",
    storageBucket: "chatbot-authenticator-976ee.appspot.com",
    messagingSenderId: "763834751211",
    appId: "1:763834751211:web:57aa1f5d9983cbeec506ae",
    measurementId: "G-KX0PB2FVLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);