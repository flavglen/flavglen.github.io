import firebase from '@firebase/app';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtLu1Ri7WxTyN8chAWhmbgXamHxPX_JJs",
    authDomain: "github-flav.firebaseapp.com",
    databaseURL: "https://github-flav.firebaseio.com",
    projectId: "github-flav",
    storageBucket: "github-flav.appspot.com",
    messagingSenderId: "515869364808",
    appId: "1:515869364808:web:1db1c3bfcc39fd78"
  }
  firebase.initializeApp(firebaseConfig);
  const db =  firebase.firestore();

  export default db;