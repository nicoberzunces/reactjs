import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import App from './App.jsx'
//import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDVoBonTG3yrvjDf1PxqNYZkopgyEErczI",
  authDomain: "reactjs-d0c7c.firebaseapp.com",
  projectId: "reactjs-d0c7c",
  storageBucket: "reactjs-d0c7c.appspot.com",
  messagingSenderId: "753155176883",
  appId: "1:753155176883:web:4ff0020818e2604c1e73c6",
  measurementId: "G-JPV9DWSLMR"
};

 const app = initializeApp(firebaseConfig);
 const db= getFirestore(app)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
