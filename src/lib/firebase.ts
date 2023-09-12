// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVUQHfF16WIIwet4Gzzqeqchm7-DNL3c",
  authDomain: "fire-tree-3a393.firebaseapp.com",
  projectId: "fire-tree-3a393",
  storageBucket: "fire-tree-3a393.appspot.com",
  messagingSenderId: "173696429671",
  appId: "1:173696429671:web:7875fc4691acd4b1006ec2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();