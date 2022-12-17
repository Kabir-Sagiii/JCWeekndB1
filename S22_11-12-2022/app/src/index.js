// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./Components/Redux/Store";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={myStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
