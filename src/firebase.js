
import { initializeApp } from "firebase/app"; 
import { getDatabase, ref, set, get, remove } from "firebase/database";

// Load environment variables from .env file
require('dotenv').config();

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID, // Optional (for Analytics)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Realtime Database instance
const db = getDatabase(app);

// Export necessary services from Firebase
export { db, ref, set, get, remove }; 
