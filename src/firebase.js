import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyB7fZzPOum5Byx47ZpXFSAOesZ01-SiJwc",
    authDomain: "jetgram-7414b.firebaseapp.com",
    projectId: "jetgram-7414b",
    storageBucket: "jetgram-7414b.appspot.com",
    messagingSenderId: "101482153435",
    appId: "1:101482153435:web:436747971631d923b813fe"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);