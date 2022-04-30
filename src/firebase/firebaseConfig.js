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

const blogs = {
  101: {
    id: "1",
    title: "bir",
  },
  102: {
    id: "2",
    title: "iki",
  },
};

const users = {
  hivda: {
    name: "hivda",
    surname: "kaymak",
  },
  ayaz: {
    name: "ayaz",
    surname: "kaymak",
  },
};

// database.ref().set({
//   blog,
//   users,
// });

database.ref("blogs/g4h44j5h").set({
  id:"45434",
  title:"hahahah",
})

database.ref("products").push({
  name: "samsung",
  price: 300,
  isApproved : true
})

database.ref("products").push({
  name: "samsung",
  price: 300,
  isApproved : true
})

database.ref("products").push({
  name: "samsung",
  price: 300,
  isApproved : true
})

database.ref("blogs").once("value").then((snapshot) => {
  console.log(snapshot.val());
}) 

database.ref("users").once("value").then((snapshot) => {
  console.log(snapshot.val());
}) 

// database.ref("blogs").push({
//   id: "3",
//   title: "blog 3"
// })

// database.ref("users").push({
//   id: "3",
//   title: "user 3"
// })