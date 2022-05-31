//https://www.youtube.com/watch?v=cXWDQhzC3do&ab_channel=DipeshMalvia

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEYXCfxgrztAbYAOLRCN1goOhlYylmkIo",
  authDomain: "test-firebase-21545.firebaseapp.com",
  projectId: "test-firebase-21545",
  storageBucket: "test-firebase-21545.appspot.com",
  messagingSenderId: "217017523278",
  appId: "1:217017523278:web:515b86d292ad2d1672b71f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
