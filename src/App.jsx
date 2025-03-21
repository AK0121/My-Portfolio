import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Contact from "./Components/Contact";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(to top, #000, #000019)",
      }}
    >
      <Navbar currentPath={currentPath} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
