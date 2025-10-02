import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/compat/app";
import './index.css'; //import css file!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvsboOwtQHecEfjWY7WGYuUeFHURtP8So",
  authDomain: "asbas-tech-99035.firebaseapp.com",
  projectId: "asbas-tech-99035",
  storageBucket: "asbas-tech-99035.appspot.com",
  messagingSenderId: "600481262389",
  appId: "1:600481262389:web:473f3e92fc2f8771dfba7c",
  measurementId: "G-8VF4HCDGBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

// import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter><App /></BrowserRouter>
);

reportWebVitals();
