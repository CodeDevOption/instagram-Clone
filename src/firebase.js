import  { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_BWWep28NKoVYeJD8OknAKqfq4uXpv_M",
    authDomain: "instargram-web-app.firebaseapp.com",
    projectId: "instargram-web-app",
    storageBucket: "instargram-web-app.appspot.com",
    messagingSenderId: "261047495417",
    appId: "1:261047495417:web:28002349e2f6d52b85d028",
    measurementId: "G-Q9X68BEKDK"
  };

const App = initializeApp(firebaseConfig);
const db = getFirestore(App);
export default db;