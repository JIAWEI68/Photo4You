import React from "react";
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
