import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const  firebaseConfig = {
    apiKey: "AIzaSyBsHFnWvhhRYZ6F-cmKcvAhr3_G01nlgF4",
    authDomain: "vuetify-login.firebaseapp.com",
    projectId: "vuetify-login",
    storageBucket: "vuetify-login.appspot.com",
    messagingSenderId: "1098761428552",
    appId: "1:1098761428552:web:98f54ec4cf56d66e33c27d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export {firebase,db,auth,storage};