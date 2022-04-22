import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import { createStore, combineReducers } from "redux";

const state = {
  blogs: [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Blog Description",
      dateAdded: 0,
    },
  ],
  auth: {
    userid: 1,
    username: "miray",
    email: "miirayazz@gmail.com",
  },
};

const addBlog = ({title='', description='', dateAdded=''}) => ({
  type: "ADD_BLOG",
  blog: {
    id: 2,
    title: "aa",
    description: "bb",
    dateAdded: 0,
  },
});

const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const authState = {
  auth: {
    userid: 1,
    username: "miray",
    email: "miirayazz@gmail.com",
  },
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(<AppRouter />, document.getElementById("root"));

ServiceWorker.unregister();
