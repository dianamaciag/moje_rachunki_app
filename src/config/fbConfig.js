import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-_QDhMf5BG1NX28tz71YdB2A_VpUE0Oo",
    authDomain: "moje-rachunki-app.firebaseapp.com",
    databaseURL: "https://moje-rachunki-app.firebaseio.com",
    projectId: "moje-rachunki-app",
    storageBucket: "moje-rachunki-app.appspot.com",
    messagingSenderId: "621417695172"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase