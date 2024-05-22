import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//  apiKey: "AIzaSyAVlxsrtSko1em_vpw0W0CTioXDQSymh0A",
//   authDomain: "movie-app-f32dc.firebaseapp.com",
//   projectId: "movie-app-f32dc",
//   storageBucket: "movie-app-f32dc.appspot.com",
//   messagingSenderId: "623714802995",
//   appId: "1:623714802995:web:fe5f50509bba2eef983246"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
