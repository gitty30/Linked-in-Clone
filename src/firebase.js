// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB97EDZuS0SjsV_bMhh77TbRYL4X5uxWy4",
    authDomain: "linkedin-clone-b4beb.firebaseapp.com",
    projectId: "linkedin-clone-b4beb",
    storageBucket: "linkedin-clone-b4beb.appspot.com",
    messagingSenderId: "104546338918",
    appId: "1:104546338918:web:ee6ad313fbf2611d5a45a7",
    measurementId: "G-CX8FZ4ZYCV"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};