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
 
  
  export default authReducer