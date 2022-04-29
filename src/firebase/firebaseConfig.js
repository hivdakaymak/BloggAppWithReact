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
  .ref()
  .set({
    title: "Blog Title",
    description: "Blog Description",
    author: {
      name: "Miray",
      surname: "Kaymak",
    },
  })
  .then(() => {
    // database
    //   .ref("tags")
    //   .set(["angular"])
    //   .then(() => {
    //     console.log("Etiketler eklendi");
    //   })
    //   .catch((e) => {
    //     console.log("hata", e);
    //   });
    console.log("kayıt eklendi")
  })
  .catch((e) => {
    console.log("hata", e);
  });

  database.ref().update({
    title: "Blog title 2",
    description:"hebele hübele",
    // author:{
    //   name: "hshshah",
    //   surname: "lkjsdhv"
    // }
    "author/name" : "yhdeyey",
    imgUrl: "hahahaha"
  })


  database.ref("author").update({
    name: "hahaha",
    surname:"hahaha"
    
  })




// database.ref().set(null);


// database
//   .ref("title")
//   .remove()
//   .then(() => {
//     console.log("Başarılı");
//   })
//   .catch((e) => {
//     console.log("err");
//   });


// database
//   .ref("outhor/name")
//   .remove()
//   .then(() => {
//     console.log("Başarılı");
//   })
//   .catch((e) => {
//     console.log("err");
//   });


// database
//   .ref(" ")
//   .remove()
//   .then(() => {
//     console.log("Başarılı");
//   })
//   .catch((e) => {
//     console.log("err");
//   });


// database.ref()
// .once("value")
// .then((snapshot) =>{
//   const blog = snapshot.val();
//   console.log(blog)

// }).catch((e) => {
//   console.log("eroor")
// })

database.ref().on("value", (snapshot) => {
  const blog = snapshot.val();
  console.log(blog)
})

setTimeout(() => {
  database.ref("title").set("updated 1")
}, 3000);

setTimeout(() => {
  database.ref().off(); 
}, 6000);

setTimeout(() => {
  database.ref("title").set("updated 3")
}, 9000);