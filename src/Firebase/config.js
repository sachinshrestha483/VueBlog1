import firebase from "firebase/app";
// core project contains every thing we require
// always use...
 
import "firebase/firestore";
 
// fore importing some functionality
 
const firebaseConfig = {
  apiKey: "AIzaSyCUdD3QQeWbTkS8QBXvim82So4u5jfNapg",
  // Dont worry we can set to get re  quest from one domain only we specify
  authDomain: "vuefirebase1-1cfc6.firebaseapp.com",
  projectId: "vuefirebase1-1cfc6",
  storageBucket: "vuefirebase1-1cfc6.appspot.com",
  messagingSenderId: "1039058265818",
  appId: "1:1039058265818:web:6cb8dca35801b075f1e7e3",
};
 
// initialise app
 
firebase.initializeApp(firebaseConfig);
 
// init firestore service
 
const projectFirestore = firebase.firestore();
 
// we can use this when we require the fire store database
 
export { projectFirestore };
 
 
 
