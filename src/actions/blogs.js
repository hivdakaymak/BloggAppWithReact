import { v4 as uuid } from "uuid";

export const state = {
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

export const addBlog = ({ title = "", description = "", dateAdded = 0 }) => ({
  type: "ADD_BLOG",
  blog: {
    id: 2,
    title: "aa",
    description: "bb",
    dateAdded: 0,
  },
});

export const removeBlog = ({ id }) => ({
  type: "REMOVE_BLOG",
  id: id,
});

export const editBlog = (id, updates) => ({
  type: "EDITED_BLOG",
  id,
  updates,
});
