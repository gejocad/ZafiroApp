import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAJRceZuYTzfLBk70xWa5EJPRugTaBbw6Q",
  authDomain: "zafiroapp-46dac.firebaseapp.com",
  projectId: "zafiroapp-46dac",
  storageBucket: "zafiroapp-46dac.appspot.com",
  messagingSenderId: "134114649293",
  appId: "1:134114649293:web:99ce945680a71d8eedf584"
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