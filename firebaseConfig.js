import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDa5uAua2wWnhrIQlU86OpkQShFC7udj-c",
  authDomain: "my-superheroes.firebaseapp.com",
  projectId: "my-superheroes",
  storageBucket: "my-superheroes.appspot.com",
  messagingSenderId: "508862381473",
  appId: "1:508862381473:web:9e9d4123db9c2989dc5fe0"
};

  // Initialize Firebase

const fire =  firebase.initializeApp(firebaseConfig);



export {fire}