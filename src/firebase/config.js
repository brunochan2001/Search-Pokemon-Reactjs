import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBu2lkN5FaZPwF73ce4ibKEXXET7jo-B90',
  authDomain: 'pokemon-9fdf8.firebaseapp.com',
  projectId: 'pokemon-9fdf8',
  storageBucket: 'pokemon-9fdf8.appspot.com',
  messagingSenderId: '503588805325',
  appId: '1:503588805325:web:d4f328014e9da2e6cda784'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
