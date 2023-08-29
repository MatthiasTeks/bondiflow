import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA-IwsRGQZ5r8kamp6bk00gdgZmU60eNGo",
    authDomain: "restaurant-bondi.firebaseapp.com",
    projectId: "restaurant-bondi",
    storageBucket: "restaurant-bondi.appspot.com",
    messagingSenderId: "797413139054",
    appId: "1:797413139054:web:f92eca39f70ff5569afc7f",
    measurementId: "G-08WD0V8KKP"
  };
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
  