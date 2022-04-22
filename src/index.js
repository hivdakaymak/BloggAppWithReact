import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

const state = {
  blogs: [
    {
      id: uuid(),
      title: title,
      description: description,
      dateAdded: dateAdded,
    },
  ],
  auth: {
    userid: 1,
    username: "miray",
    email: "miirayazz@gmail.com",
  },
};

const addBlog = ({ title = "", description = "", dateAdded = 0 }) => ({
  type: "ADD_BLOG",
  blog: {
    id: 2,
    title: "aa",
    description: "bb",
    dateAdded: 0,
  },
});

const removeBlog = ({ id }) => ({
  type: "REMOVE_BLOG",
  id: id,
});

const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];

    case "REMOVE_BLOG":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
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
    case "ADD_BLOG":
      return [...state, action.blog];
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

 const blog1 = store.dispatch(
  addBlog({ title: "Blog Title", description: "blog description" })
);

 const blog2 = store.dispatch(
  addBlog({ title: "Blog Title 2", description: "blog description 2" })
);

store.dispatch(removeBlog({id: blog1.blog.id}))

store.dispatch(editBlog(blog2.blog.id,{title:'updated title', description:'Updated description'}))

ReactDOM.render(<AppRouter />, document.getElementById("root"));

ServiceWorker.unregister();
