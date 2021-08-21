import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyAGI9OFE4brhKVHlOwJRJxhDvCjLEMoIrM",
  authDomain: "tnchat-b83b9.firebaseapp.com",
  projectId: "tnchat-b83b9",
  storageBucket: "tnchat-b83b9.appspot.com",
  messagingSenderId: "979781798367",
  appId: "1:979781798367:web:5ccb4a17836d1959b61c6a"
}).auth();