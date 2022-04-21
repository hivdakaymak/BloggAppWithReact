import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import {createStore} from 'redux';

const initialState = {
    count:0
}

const store = ((state = initialState)=>{
    return state
})

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("root"));

ServiceWorker.unregister();
