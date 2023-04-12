import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Preload from "./components/Preload";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// star blacks
function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preload load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
