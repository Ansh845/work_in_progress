import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

var firebaseApp = initializeApp({
    apiKey: "AIzaSyC-FL-l3bBvc1QQQ3PheEvxNHgly9qHqC4",
    authDomain: "canteen-d1615.firebaseapp.com",
    databaseURL: "https://canteen-d1615-default-rtdb.firebaseio.com",
    projectId: "canteen-d1615",
    storageBucket: "canteen-d1615.appspot.com",
    messagingSenderId: "834383670146",
    appId: "1:834383670146:web:5d5ea6a0da69f6fd547d9b",
    measurementId: "G-HBZBDRE24Y"
})

export default firebaseApp;
