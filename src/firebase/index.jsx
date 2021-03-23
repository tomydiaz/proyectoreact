import firebase from "firebase/app";
import "@firebase/firestore";

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyAZWf4EWYGlfZ0yX4m2ECGpQZPrjlMv9Xk",
  authDomain: "proyectoreactcoder.firebaseapp.com",
  projectId: "proyectoreactcoder",
  storageBucket: "proyectoreactcoder.appspot.com",
  messagingSenderId: "1092694958512",
  appId: "1:1092694958512:web:fa0b90c7910d02dd5ff675",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
