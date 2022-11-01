import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/basic/Home";
import { Index } from './components/basic/Index';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
