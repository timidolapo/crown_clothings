import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBAMnox5jqBomyAsq9eOkQAcngs-Tji4Hs",
  authDomain: "crown-db-ea0b2.firebaseapp.com",
  databaseURL: "https://crown-db-ea0b2.firebaseio.com",
  projectId: "crown-db-ea0b2",
  storageBucket: "crown-db-ea0b2.appspot.com",
  messagingSenderId: "292572076825",
  appId: "1:292572076825:web:cfe429d63d3e1bebfa0388",
  measurementId: "G-EY03QDZSV6"

};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
