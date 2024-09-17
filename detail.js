// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
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
const db = getFirestore(app);

// Reference to the student collection
const studentCollectionRef = collection(db, "student");

async function fetchStudentData() {
  try {
    const querySnapshot = await getDocs(studentCollectionRef);
    const tableBody = document.getElementById("detail");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Iterate over documents and create table rows
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const row = document.createElement("tr");
      console.log(data);

      row.innerHTML = `
      <td class="p-4 border-b border-gray-200">${data.firstName}</td>
      <td class="p-4 border-b border-gray-200">${data.lastName}</td>
      <td class="p-4 border-b border-gray-200">${data.email}</td>
      <td class="p-4 border-b border-gray-200">${data.mobile}</td>
      <td class="p-4 border-b border-gray-200">${data.gender}</td>
      `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching student data: ", error);
  }
}

// Fetch student data when the page loads
document.addEventListener("DOMContentLoaded", fetchStudentData);
