
const firebaseConfig = {

  apiKey: "AIzaSyCfI0d8gavOVFaYnDuQEAeYEFYFAWBs5Mo",

  authDomain: "news-api-a4158.firebaseapp.com",

  projectId: "news-api-a4158",

  storageBucket: "news-api-a4158.appspot.com",

  messagingSenderId: "22544382050",

  appId: "1:22544382050:web:3fea4258de14131ca2793b",

  measurementId: "G-0CKC0GBWYK"

};

export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error('Firebase config not found');
    }
    return firebaseConfig;

}