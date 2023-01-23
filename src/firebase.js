import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAI6mW2Mgb7SYVgCNR60nqiSfYIaIEdjC8",
  authDomain: "crud-operations-afd45.firebaseapp.com",
  databaseURL:
    "https://crud-operations-afd45-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-operations-afd45",
  storageBucket: "crud-operations-afd45.appspot.com",
  messagingSenderId: "104917712266",
  appId: "1:104917712266:web:1491c482e00b4c819ddc73",
  measurementId: "G-X67RKJ4WKL",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
