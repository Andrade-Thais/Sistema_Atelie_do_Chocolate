import firebase from 'firebase/app';
//import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSB8Yj5z5I1NtJZc43iWIG8teW9LpgCEA",
  authDomain: "sistema-atelie-do-chocolate.firebaseapp.com",
  projectId: "sistema-atelie-do-chocolate",
  storageBucket: "sistema-atelie-do-chocolate.appspot.com",
  messagingSenderId: "396705599206",
  appId: "1:396705599206:web:878b430f8d9c2ccf69f527",
};
  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

