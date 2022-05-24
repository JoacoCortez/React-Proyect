import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {CartContextProvider} from './Store/Cart-context';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdoxWfvGHucPx7irbwtI-SzPwdRWzpGZQ",
  authDomain: "birra-en-casa-cortez.firebaseapp.com",
  projectId: "birra-en-casa-cortez",
  storageBucket: "birra-en-casa-cortez.appspot.com",
  messagingSenderId: "215645048308",
  appId: "1:215645048308:web:680c1219cb968d663bbda1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
);

