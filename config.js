import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDmf_JAqHv_QR-uyIjnSQW35Z1YudvQzXY",
  authDomain: "book-santa-1-f5978.firebaseapp.com",
  projectId: "book-santa-1-f5978",
  storageBucket: "book-santa-1-f5978.appspot.com",
  messagingSenderId: "569793833179",
  appId: "1:569793833179:web:e3585e4a5354a9bcefc4fe"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore()