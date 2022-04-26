import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import {addBlog} from "../actions/blogs"

const AddBlogPage = (props) => {
  return (
    <>
      <h1>Add Blog Page</h1>
      <BlogForm onSubmit={(blog) =>{
       props.dispatch(addBlog(blog));
       props.history.push('');
      }} />
     </>
  );
};

export default connect()(AddBlogPage);
