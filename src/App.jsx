import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import LoginNavbar from "./Components/LoginNavbar";
import Footer from "./Components/Footer";

function App() {
  const userId = sessionStorage.getItem("userId");
  const [nullChecker, setUserId] = useState(false);
  useEffect(() => {
    if (userId != "" && userId != null) {
      setUserId(true);
    }
  }, []);

  return (
    <div>
      {nullChecker ? (
        <LoginNavbar />
      ) : (
        <Navbar />
      )}
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

