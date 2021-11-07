import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDa5VeZ3EXXxxtSMwjV4XWAmYOMP_XZC8M",
  authDomain: "very-hot-burgers-53108.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-53108-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebase.database()); // связали базу данных с реактом

export { firebaseApp };

export default base;
