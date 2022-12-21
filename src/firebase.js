// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCMRymP71ebO2ZEAgt8xvh_BBYI7V_G0yw",
    authDomain: "mail-box-db556.firebaseapp.com",
    databaseURL: "https://mail-box-db556-default-rtdb.firebaseio.com",
    projectId: "mail-box-db556",
    storageBucket: "mail-box-db556.appspot.com",
    messagingSenderId: "191760291135",
    appId: "1:191760291135:web:c45c7280fd5b9d6a98ef8a",
    measurementId: "G-CLVE8S500Q"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export {db};