// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";       // ✅ import the new Home.jsx
import AboutUs from "./pages/AboutUs"; // ✅ make sure paths are correct
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="p-4 bg-gray-900 text-white flex gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About Us</Link>
        <Link to="/services" className="hover:text-blue-400">Services</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />         {/* Home.jsx */}
        <Route path="/about" element={<AboutUs />} /> {/* AboutUs.jsx */}
        <Route path="/services" element={<Services />} /> {/* Services.jsx */}
      </Routes>
    </Router>
  );
}

export default App;
