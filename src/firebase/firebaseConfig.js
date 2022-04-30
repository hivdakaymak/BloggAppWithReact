// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwZGonaLaEp7si7sG4xUlHgJHyhJolEKA",
  authDomain: "react-blog-app-330be.firebaseapp.com",
  projectId: "react-blog-app-330be",
  storageBucket: "react-blog-app-330be.appspot.com",
  messagingSenderId: "997623104112",
  appId: "1:997623104112:web:3f200ac74bf6fdc9b02ab5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.database();

database
  .ref("products")
  .once("value")
  .then((snapshot) => {
    const products = [];
    snapshot.forEach((products) => {
      products.push({
        id: product.key,
        ...product.val,
      });
    });

    console.log(snapshot.val());
  });


  database.ref("products").on("value", (snapshot) => {

    const products = [];
    snapshot.forEach((products) => {
      products.push({
        id: product.key,
        ...product.val,
      });
    });

    console.log(products);

  })


  database.ref("products").on("child_removed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  })


  database.ref("products").on("child_changed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  })


  database.ref("products").on("child_added", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  })






// database.ref("products").push({
//   name: "samsung",
//   price: 300,
//   isApproved : true
// })

// database.ref("products").push({
//   name: "samsung",
//   price: 300,
//   isApproved : true
// })

// database.ref("products").push({
//   name: "samsung",
//   price: 300,
//   isApproved : true
// })
