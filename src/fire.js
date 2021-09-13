import firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmMQNCDZ1AE-bZG-2dATlLt-ZU6ClF1G8",
    authDomain: "writeit-c71db.firebaseapp.com",
    projectId: "writeit-c71db",
    storageBucket: "writeit-c71db.appspot.com",
    messagingSenderId: "798329946327",
    appId: "1:798329946327:web:b666443f5e6ad1f7de7092"
  };
  // Initialize Firebase


  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
