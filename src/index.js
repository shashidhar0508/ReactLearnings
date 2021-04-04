import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// For SPA Application
/* import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./SPA/components/App";

// BrowserRouter is responsible for navigating from components
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); */
