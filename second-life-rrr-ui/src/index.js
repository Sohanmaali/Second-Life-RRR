import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Provider store={store}>
        <div className="">
          <ToastContainer />
          <App />
        </div>
      </Provider>
    </BrowserRouter>
  </>
  // </React.StrictMode>
);

reportWebVitals();
