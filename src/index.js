import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import { createStore } from "redux";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  count: 0,
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

console.log(store.getState());

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 10,
// });

// store.dispatch({
//   type: "DECREMENT",
// });

ReactDOM.render(<AppRouter />, document.getElementById("root"));

ServiceWorker.unregister();
