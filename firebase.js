// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import * as firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
    apiKey: "AIzaSyDEaFLjJ7VfpoNghvVkljWBY-36mIjv57s",
    authDomain: "for40-a8b3f.firebaseapp.com",
    projectId: "for40-a8b3f",
    storageBucket: "for40-a8b3f.firebasestorage.app",
    messagingSenderId: "250214091902",
    appId: "1:250214091902:web:590887b50ee0765876dc2f",
    measurementId: "G-KL593F0GGJ"
};


let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default app;

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };
// export default app;
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export default app;