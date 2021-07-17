import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'//NOSQL database
import { existsOne } from 'domutils'
firebase.initializeApp({apiKey: "AIzaSyCF98baZzC7mfg0s2ea-NXr10ydbhsnoBY",
authDomain: "reel-class-5bdfb.firebaseapp.com",
projectId: "reel-class-5bdfb",
storageBucket: "reel-class-5bdfb.appspot.com",
messagingSenderId: "145039021587",
appId: "1:145039021587:web:fffadba9c366a5e69951e6"})


export const auth=firebase.auth();//alternate way of exporting this is done to make our firebase more secure
// as if we export firebase then any user can deletefiles of any other user, instead we export componenets
 const firestore=firebase.firestore();// initialisation of ......not exporting due to security
 export const database={
     users:firestore.collection('user'),//creating user collection
     timeStamp:firebase.firestore.FieldValue.serverTimestamp
 }
export const storage=firebase.storage();
export default firebase