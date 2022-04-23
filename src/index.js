import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStores";
import { addBlog, removeBlog, editBlog } from "./actions/blogs";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({ title: "Blog Title", description: "blog description" })
);

const blog2 = store.dispatch(
  addBlog({ title: "Blog Title 2", description: "blog description 2" })
);

store.dispatch(removeBlog({ id: blog1.blog.id }));

store.dispatch(
  editBlog(blog2.blog.id, {
    title: "updated title",
    description: "Updated description",
  })
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));

ServiceWorker.unregister();
