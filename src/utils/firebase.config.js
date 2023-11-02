// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-vwgv05ontaiI9IBBQhsbFBS90ZFCElw",
  authDomain: "mydreamproject1-869c4.firebaseapp.com",
  projectId: "mydreamproject1-869c4",
  storageBucket: "mydreamproject1-869c4.appspot.com",
  messagingSenderId: "1050592001986",
  appId: "1:1050592001986:web:5ec4c11bd7a90b81da205b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
