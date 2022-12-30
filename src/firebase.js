import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAxS1ocI7iPMQuNN9AdLc25gR38v7ya04Y",
  authDomain: "netflix-clone-3bbfc.firebaseapp.com",
  projectId: "netflix-clone-3bbfc",
  storageBucket: "netflix-clone-3bbfc.appspot.com",
  messagingSenderId: "506036296843",
  appId: "1:506036296843:web:1c0feff74aef3d1448088e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const createUser = (email,password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user){
        console.log('User created successfuly!');
      }
      // ...
    })
    .catch((error) => {
      console.log('Something went wrong!',error);
      // ..
    });
}

const loginUser = (email,password) => {
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user){
        
      }
      // ...
    })
    .catch((error) => {
      console.log('Something went wrong',error);
    });

}

const logoutUser = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    
  }).catch((error) => {
    // An error happened.
    
  });
  
}

export {createUser,loginUser,logoutUser};
export default db;