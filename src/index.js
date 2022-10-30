import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgcFoGp5UncGTTYrUJkhKFey7LlpkTDy4",
  authDomain: "proyecto-react-8ea04.firebaseapp.com",
  projectId: "proyecto-react-8ea04",
  storageBucket: "proyecto-react-8ea04.appspot.com",
  messagingSenderId: "344128603020",
  appId: "1:344128603020:web:d99f8431e7db514feb4ca9"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
