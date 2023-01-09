import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./Navbar";

export default function main() {
  return (
    <><Navbar /><BrowserRouter>
      <App />
    </BrowserRouter></>
  );
}
