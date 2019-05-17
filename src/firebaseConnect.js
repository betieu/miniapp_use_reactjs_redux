 import  data_firebase from 'firebase'
  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyARPBFFkQuTzEJEDLnJD7LCo7eYog7pybM",
    authDomain: "todoapp-8c982.firebaseapp.com",
    databaseURL: "https://todoapp-8c982.firebaseio.com",
    projectId: "todoapp-8c982",
    storageBucket: "todoapp-8c982.appspot.com",
    messagingSenderId: "940452154690",
    appId: "1:940452154690:web:1241bec2f85f3e91"
  };
  // Initialize Firebase
  const firebaseConnect = data_firebase.initializeApp(firebaseConfig);
  
  export const data = data_firebase.database().ref('testschedule');