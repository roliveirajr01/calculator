import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC_kpBDqphh6PNY_HEM7iljo4vHfvJUtEk",
    authDomain: "login-9df4e.firebaseapp.com",
    projectId: "login-9df4e",
    storageBucket: "login-9df4e.appspot.com",
    messagingSenderId: "99469659920",
    appId: "1:99469659920:web:1ba1cc0103e746fe43df95"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;

