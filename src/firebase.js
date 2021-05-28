import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHhCQ3PTtTZkobkdYtUmyWuonfLpFoCb0",
    authDomain: "instagrambysharjeel.firebaseapp.com",
    projectId: "instagrambysharjeel",
    storageBucket: "instagrambysharjeel.appspot.com",
    messagingSenderId: "1019215108628",
    appId: "1:1019215108628:web:01cba608cdf0ac7cdbe501",
    measurementId: "G-1F7B7YK70L"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };