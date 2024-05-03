// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCdxNSVj_fhY5Irej7pGgBmbiLzwqLVSUk",
//   authDomain: "registration-form-694e2.firebaseapp.com",
//   databaseURL: "https://registration-form-694e2-default-rtdb.firebaseio.com",
//   projectId: "registration-form-694e2",
//   storageBucket: "registration-form-694e2.appspot.com",
//   messagingSenderId: "521258671770",
//   appId: "1:521258671770:web:8ce8a68ec814e839c50923",
//   measurementId: "G-K1BV1144XJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJqG8E7MsnSZ9NYt3UsJhfw4uFiguxk7w",
  authDomain: "edp-project-cbc1c.firebaseapp.com",
  databaseURL: "https://edp-project-cbc1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "edp-project-cbc1c",
  storageBucket: "edp-project-cbc1c.appspot.com",
  messagingSenderId: "979561473168",
  appId: "1:979561473168:web:6fee9c5911e1b3fca86415",
  measurementId: "G-P09QVPVWK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;