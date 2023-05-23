import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useHistory } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyCnS38YzWWS0kVNGNm2X-2gBUhbRnpHLYQ",
  authDomain: "trackbook-ffdf4.firebaseapp.com",
  projectId: "trackbook-ffdf4",
  storageBucket: "trackbook-ffdf4.appspot.com",
  messagingSenderId: "107111408492",
  appId: "1:107111408492:web:4962f80214cdf53f6b4949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
export const auth = getAuth(app);


export const handlesignup = (e) => {
  e.preventDefault();
  signInWithPopup(auth, googleprovider)
    .then((result) => {
      const loggeduser = result.user;
      console.log(loggeduser);
    })
    .catch((err) => {
      console.log(err);
    });
};

