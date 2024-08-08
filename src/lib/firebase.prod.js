import { initializeApp } from 'firebase/app';
//import {getFirestore} from 'firebase/firestore';
//import {getAuth} from 'firebase/auth';

import { seedDatabase } from "./seed";

//need to somehow seed the databse

//need a config 
const config = {apiKey: "AIzaSyDhARn5l7ijexwuQddONMtTHHE7pJQokus",
    authDomain: "netflix-73eaf.firebaseapp.com",
    projectId: "netflix-73eaf",
    storageBucket: "netflix-73eaf.appspot.com",
    messagingSenderId: "808049795698",
    appId: "1:808049795698:web:4cea42c5301e3cdc6518eb"};

const app = initializeApp(config);

//seedDatabase(app);

export {app};