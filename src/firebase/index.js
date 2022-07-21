import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2nY1Z9Q4A79fXr9xujVxVOKmUkkOB_I0",
  authDomain: "portfolio-a21mj0n.firebaseapp.com",
  projectId: "portfolio-a21mj0n",
  storageBucket: "portfolio-a21mj0n.appspot.com",
  messagingSenderId: "714411284162",
  appId: "1:714411284162:web:267b10527f5fbae16f4d5b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();