import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { FirebaseContext } from './context/firebase';
import {UserInfor} from './context/userInfo'
// const config = {
//     apiKey: "AIzaSyCbYC77vFjtJfxdKAXSyQVV8y1Pz3I0_Io",
//     authDomain: "netflix-bo.firebaseapp.com",
//     databaseURL: "https://netflix-bo.firebaseio.com",
//     projectId: "netflix-bo",
//     storageBucket: "netflix-bo.appspot.com",
//     messagingSenderId: "670830835874",
//     appId: "1:670830835874:web:aab7d06adc071fa568fffb"
// }

// const firebase = window.firebase.initializeApp(config);


ReactDOM.render(
  // <FirebaseContext.Provider value={{ firebase: window.firebase }}>
  <FirebaseContext.Provider>
      <Router>
        <App />
      </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

