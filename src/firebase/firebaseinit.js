import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCjCqagUATUfpcm3cd98et7EQ2DGNV1-z0",
  authDomain: "invoice-app-53623.firebaseapp.com",
  projectId: "invoice-app-53623",
  storageBucket: "invoice-app-53623.appspot.com",
  messagingSenderId: "1042142908247",
  appId: "1:1042142908247:web:3e751c9a8fc56c46b8f812"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
