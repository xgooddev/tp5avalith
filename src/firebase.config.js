import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoMOYbt05UAo07EJq70HEXWCmNKID1blE",
  authDomain: "restauranteapp711.firebaseapp.com",
  databaseURL: "https://restauranteapp711-default-rtdb.firebaseio.com",
  projectId: "restauranteapp711",
  storageBucket: "restauranteapp711.appspot.com",
  messagingSenderId: "957462794392",
  appId: "1:957462794392:web:2bd771356ef420ec8a80ed",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
