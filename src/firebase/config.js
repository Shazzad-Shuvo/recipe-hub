import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjFmKEYb3jN2Va4NEhfogZR1F-iHqbNy8",
  authDomain: "recipe-hub-site-948ca.firebaseapp.com",
  projectId: "recipe-hub-site-948ca",
  storageBucket: "recipe-hub-site-948ca.appspot.com",
  messagingSenderId: "130484889855",
  appId: "1:130484889855:web:e42e7d3eca593768ebc4ca",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
