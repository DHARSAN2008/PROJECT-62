import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAQEDwe292oaZ_Yxo5Zykp5QYf_ZQ4T3Eo",
  authDomain: "project-60-f73d9.firebaseapp.com",
  databaseURL: "https://project-60-f73d9-default-rtdb.firebaseio.com",
  projectId: "project-60-f73d9",
  storageBucket: "project-60-f73d9.appspot.com",
  messagingSenderId: "695442121715",
  appId: "1:695442121715:web:591ffef0d9b66271182886"
};

if(!firebase.apps.length){
let app=firebase.initializeApp(firebaseConfig)
}
export default firebase.database();


 

  