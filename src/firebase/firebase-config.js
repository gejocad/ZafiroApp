import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAaTapNCDRD_l4wWd_2wN7vNTAqqIA_Ti0",
  authDomain: "zafiroapp-d5379.firebaseapp.com",
  projectId: "zafiroapp-d5379",
  storageBucket: "zafiroapp-d5379.appspot.com",
  messagingSenderId: "390034566049",
  appId: "1:390034566049:web:46ae9657c906713afef9e0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}