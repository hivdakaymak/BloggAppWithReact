import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import "./App.css"

ReactDOM.render(<AppRouter />, document.getElementById("root"));

ServiceWorker.unregister();
