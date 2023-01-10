import { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default App;

