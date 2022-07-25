import React from "react";
import ReactDOM from "react-dom";
import "react-calendar/dist/Calendar.css";
import "./App/layout/styles.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App/layout/App";
import reportWebVitals from "./reportWebVitals";
import { store, StoreContext } from "./App/stores/store";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
