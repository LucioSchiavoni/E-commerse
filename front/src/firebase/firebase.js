// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAEhNBExoayEcCLxqTF_H4SViF7HyY2i4",
    authDomain: "img3d-d8a34.firebaseapp.com",
    projectId: "img3d-d8a34",
    storageBucket: "img3d-d8a34.appspot.com",
    messagingSenderId: "806419736232",
    appId: "1:806419736232:web:0b977d9801f0fac080849d",
    measurementId: "G-6PNJM21DB4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)