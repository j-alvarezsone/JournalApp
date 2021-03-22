import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCja4x_k4d52cKirs2SyJTn_7nauGWBR7g',
  authDomain: 'react-app-cursos-db7b0.firebaseapp.com',
  projectId: 'react-app-cursos-db7b0',
  storageBucket: 'react-app-cursos-db7b0.appspot.com',
  messagingSenderId: '1084752226097',
  appId: '1:1084752226097:web:e8a60780ed57a44ce23210',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
