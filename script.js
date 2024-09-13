// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// // import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// import {
//   getFirestore,
//   collection,
//   addDoc,
// } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHGDb4o7pJZw3eOugSaVCEFiTtzKd7viI",
//   authDomain: "class-1-39b59.firebaseapp.com",
//   projectId: "class-1-39b59",
//   storageBucket: "class-1-39b59.appspot.com",
//   messagingSenderId: "401024482096",
//   appId: "1:401024482096:web:f7825fe42b48fa9f2326f5",
//   measurementId: "G-VQ1ZJX20NL",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // const auth = getAuth(app);
// const db = getFirestore(app);

// const btn = document.getElementById("btn");
// btn.addEventListener("submit", async function () {
//   //   const obj = {
//   //     firstName,
//   //     lastName,
//   //     email,
//   //     mobile,
//   //     gender,
//   //   };
//   const firstName = document.getElementById("first-name").value;
//   const lastName = document.getElementById("last-name").value;
//   const email = document.getElementById("email").value;
//   const mobile = document.getElementById("mobile").value;
//   const gender = document.querySelector('input[name="gender"]:checked');

//   try {
//     const docRef = await addDoc(collection(db, "student"), {
//       firstName,
//       lastName,
//       email,
//       mobile,
//       gender,
//     });
//     console.log("Document written with ID: ", docRef.id);
//     alert("Registration successful!");
//     document.getElementById("registration-form").reset();
//   } catch (e) {
//     console.error("Error adding document: ", e);
//     alert("Registration failed. Please try again.");
//   }
// });

// function Submit() {
//     const firstName = document.getElementById("first-name").value;
//     const lastName = document.getElementById("last-name").value;
//     const email = document.getElementById("email").value;
//     const mobile = document.getElementById("mobile").value;
//     const gender = document.querySelector('input[name="gender"]:checked');

//     const formData = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         mobile: mobile,
//         gender: gender ? gender.value : null
//     };

//     console.log('Form Data:', formData);
//     document.getElementById('registration-form').reset();
// }





// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHGDb4o7pJZw3eOugSaVCEFiTtzKd7viI",
  authDomain: "class-1-39b59.firebaseapp.com",
  projectId: "class-1-39b59",
  storageBucket: "class-1-39b59.appspot.com",
  messagingSenderId: "401024482096",
  appId: "1:401024482096:web:f7825fe42b48fa9f2326f5",
  measurementId: "G-VQ1ZJX20NL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
const db = getFirestore(app);

const btn = document.getElementById("btn");

// Handle form submission
btn.addEventListener("click", async function () {
  // Retrieve form values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const genderElement = document.querySelector('input[name="gender"]:checked');
  const gender = genderElement ? genderElement.value : ''; // Extract the value, default to empty string if not selected

  // Object to be sent to Firestore
  const formData = {
    firstName,
    lastName,
    email,
    mobile,
    gender
  };

  try {
    // Add a new document with a generated ID
    const docRef = await addDoc(collection(db, "student"), formData);
    console.log("Document written with ID: ", docRef.id);
    alert("Registration successful!");
    document.getElementById("registration-form").reset(); // Reset form fields
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Registration failed. Please try again.");
  }
});
