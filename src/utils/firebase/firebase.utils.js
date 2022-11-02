// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBQLWX4HYM71u_g2gI6Gb9JBm0YAY2NY",
  authDomain: "crwn-clothing-db-2a32a.firebaseapp.com",
  projectId: "crwn-clothing-db-2a32a",
  storageBucket: "crwn-clothing-db-2a32a.appspot.com",
  messagingSenderId: "1026417922078",
  appId: "1:1026417922078:web:1edbf052f47dfb1ee01e0f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
//Sign in with google pop up
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
//Sign in with google redirect
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
//Create DB
export const db = getFirestore();
//Add products to database
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  //object is shop data categories...
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object); //set location with object
  })
  //await before firing off batch
  await batch.commit(); //fires batch off
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories'); //db, collection key
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapShot) => {
    const {title, items } = docSnapShot.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});

  return categoryMap;
}
//take data from auth service and store into firestore DB
export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {} // {displayName: ''}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)
  // console.log('userDOCref', userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // console.log('UserSnapShot', userSnapshot)
  // console.log(userSnapshot.exists()); // checks if user object exists
  
  // create / set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
  
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // if user data exists
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

// whenever function is instantiated, you must pass in a callback
// this callback function will be passed to the onAuth observer
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);