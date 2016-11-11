import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBa8kI372HuXYRicj8LASKSgQ8OUG6Wo-o",
    authDomain: "mytrip-8d303.firebaseapp.com",
    databaseURL: "https://mytrip-8d303.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "304060476466"
  };

firebase.initializeApp(config);

export default firebase;
