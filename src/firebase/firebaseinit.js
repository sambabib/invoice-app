import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: process.env.VUE_APP_KEY,
  authDomain: "invoice-app-53623.firebaseapp.com",
  projectId: "invoice-app-53623",
  storageBucket: "invoice-app-53623.appspot.com",
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_ID
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
