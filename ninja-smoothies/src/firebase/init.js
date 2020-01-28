import * as firebase from 'firebase/app';
import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCEm9F4yYf7vl6s-FAlraI5OpF5g75PncM",
    authDomain: "udemy-ninja-smoothies-17fb8.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-17fb8.firebaseio.com",
    projectId: "udemy-ninja-smoothies-17fb8",
    storageBucket: "udemy-ninja-smoothies-17fb8.appspot.com",
    messagingSenderId: "718384861458",
    appId: "1:718384861458:web:87c4cf0db93caee840e3cb"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();