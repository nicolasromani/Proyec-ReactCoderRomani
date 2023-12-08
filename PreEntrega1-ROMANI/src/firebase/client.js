import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA7zVDFbYS92SkXmlJwDwJO4qsVZJVcCbw",
    authDomain: "ecommercespartancoder23.firebaseapp.com",
    projectId: "ecommercespartancoder23",
    storageBucket: "ecommercespartancoder23.appspot.com",
    messagingSenderId: "595807379081",
    appId: "1:595807379081:web:494354f017acbe9f3ef058" 
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);