import { initializeApp } from "firebase/app";

import { getDatabase, ref, get } from 'firebase/database'
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_DATA_BASE_URL
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase();

export { auth }
