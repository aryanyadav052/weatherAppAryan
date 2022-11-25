import React from "react";
import Temp from "./components/weather/temp";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUeKmJnLpDaAKvMF_cCBlf3KAn2cUlkSQ",
  authDomain: "weatherapparyan.firebaseapp.com",
  projectId: "weatherapparyan",
  storageBucket: "weatherapparyan.appspot.com",
  messagingSenderId: "779880997067",
  appId: "1:779880997067:web:cb345b480c81424549bb4e",
  measurementId: "G-4H73D5PSNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);;
const App = () => {
  return (
    <>
      <Temp />
    </>
  );
};

export default App;
