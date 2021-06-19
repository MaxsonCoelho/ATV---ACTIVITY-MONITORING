import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';


let firebaseConfig = {
   apiKey: "AIzaSyD5AvdYoVn_69mK4J5oYjNXOP7q_nE5Jnk",
   authDomain: "activity-monitoring-67f88.firebaseapp.com",
   projectId: "activity-monitoring-67f88",
   storageBucket: "activity-monitoring-67f88.appspot.com",
   messagingSenderId: "845213216345",
   appId: "1:845213216345:web:f7c65f7e2c6a2128764b48"
 };

 // Initialize Firebase
 if(!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
   firebase.firestore().settings({ experimentalForceLongPolling: true });
 }

 export default firebase;