import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCNmmEFyOlDM9qdEPMou9QUfzniX4HDnEg",
  authDomain: "online-web-courses.firebaseapp.com",
  databaseURL: "https://online-web-courses.firebaseio.com",
  projectId: "online-web-courses",
  storageBucket: "online-web-courses.appspot.com",
  messagingSenderId: "640296468271",
  appId: "1:640296468271:web:276f38e6558d4e781f2bda",
  measurementId: "G-QB7S7W9XH3"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // export default firebase;
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {firebase, googleAuthProvider, database as default };