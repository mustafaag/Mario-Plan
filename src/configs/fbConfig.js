import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCil6VFiht2zvjbbLL8kYYCI0QgV-wp-LI",
    authDomain: "marioplan-6c949.firebaseapp.com",
    databaseURL: "https://marioplan-6c949.firebaseio.com",
    projectId: "marioplan-6c949",
    storageBucket: "marioplan-6c949.appspot.com",
    messagingSenderId: "733321358255",
    appId: "1:733321358255:web:432459da94a13ea9f85d5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;