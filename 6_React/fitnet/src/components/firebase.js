import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'//NOSQL database
import { existsOne } from 'domutils'
firebase.initializeApp({apiKey: "AIzaSyDVrA0nYLVsewXxbr1PW-gDD-Vu4WuJxDc",
authDomain: "fitnet-bba46.firebaseapp.com",
projectId: "fitnet-bba46",
storageBucket: "fitnet-bba46.appspot.com",
messagingSenderId: "113330726212",
appId: "1:113330726212:web:f04ef4eeb5e93347e72311"})


export const auth=firebase.auth();//alternate way of exporting this is done to make our firebase more secure
// as if we export firebase then any user can deletefiles of any other user, instead we export componenets
 const firestore=firebase.firestore();// initialisation of ......not exporting due to security
//  export const database={
//      users:firestore.collection('user'),//creating user collection
//      posts:firestore.collection('posts'),
//      comments:firestore.collection('comments'),
//      timeStamp:firebase.firestore.FieldValue.serverTimestamp
//  }
export const storage=firebase.storage();
export default firebase