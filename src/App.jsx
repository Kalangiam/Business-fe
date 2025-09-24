// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";       // ✅ import the new Home.jsx
import AboutUs from "./pages/AboutUs"; // ✅ make sure paths are correct
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Insights from "./pages/Insights";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="p-4 bg-gray-900 text-white flex gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About Us</Link>
        <Link to="/services" className="hover:text-blue-400">Services</Link>
        <Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        <Link to="/careers" className="hover:text-blue-400">Careers</Link>
        <Link to="/insights" className="hover:text-blue-400">Insights</Link>
        <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>


      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />         {/* Home.jsx */}
        <Route path="/about" element={<AboutUs />} /> {/* AboutUs.jsx */}
        <Route path="/services" element={<Services />} /> {/* Services.jsx */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio.jsx */}
        <Route path="/contact" element={<Contact />} /> {/* Contact.jsx */}
        <Route path="/careers" element={<Careers />} /> {/* Careers.jsx */}
        <Route path="/insights" element={<Insights />} /> {/* Insights.jsx */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* PrivacyPolicy.jsx */}

      </Routes>
    </Router>
  );
}

export default App;
