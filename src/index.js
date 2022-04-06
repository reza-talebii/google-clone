import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import ResultProvider from "./Context/resultProvider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ResultProvider>
    <Router>
      <App />
    </Router>
  </ResultProvider>
);
