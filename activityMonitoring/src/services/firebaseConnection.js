import firebase from '@react-native-firebase/app';
import 'firebase/database';
import 'firebase/auth';
import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyD5AvdYoVn_69mK4J5oYjNXOP7q_nE5Jnk",
    authDomain: "activity-monitoring-67f88.firebaseapp.com",
    projectId: "activity-monitoring-67f88",
    storageBucket: "activity-monitoring-67f88.appspot.com",
    messagingSenderId: "845213216345",
    appId: "1:845213216345:web:f381ecf65e8d508a764b48"
  };
  // Initialize Firebase
 if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

 export default firebase;