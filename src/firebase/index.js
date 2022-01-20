import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBALmEgQlN_4u6AL0Amj4gUH3JwTAi2zyA',
  authDomain: 'blog-azitos.firebaseapp.com',
  projectId: 'blog-azitos',
  storageBucket: 'blog-azitos.appspot.com',
  messagingSenderId: '15871742654',
  appId: '1:15871742654:web:4753781044f8a95271c4ef',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();