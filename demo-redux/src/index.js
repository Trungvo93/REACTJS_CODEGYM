import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoComponent from "./components/DemoComponent";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterSaga from "./components/reduxSaga/RouterSaga";
import RouterReduxThunk from "./components/redux-thunk/RouterReduxThunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <DemoComponent />
  // </Provider>
  <RouterReduxThunk></RouterReduxThunk>
);
