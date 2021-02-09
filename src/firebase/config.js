// Your web app's Firebase configuration
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAGRqfHHKsHnta5Ka8JqXOcT3Fpnly_YAQ",
  authDomain: "react-instafire.firebaseapp.com",
  projectId: "react-instafire",
  storageBucket: "react-instafire.appspot.com",
  messagingSenderId: "350457262472",
  appId: "1:350457262472:web:691c0ddf149db036da0a3d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };
