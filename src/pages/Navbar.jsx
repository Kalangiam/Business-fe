// src/pages/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "tween", duration: 0.4 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.3 },
  }),
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
    { to: "/careers", label: "Careers" },
    { to: "/insights", label: "Insights" },
    { to: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <h1 className="text-xl font-bold">Logo</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Drawer */}
      <motion.aside
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg z-50 p-6"
      >
        <nav className="flex flex-col gap-6 mt-10">
          {links.map((link, i) => (
            <motion.div
              key={link.to}
              variants={linkVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              custom={i}
            >
              <Link
                to={link.to}
                className="block text-lg hover:text-blue-400 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.aside>
    </header>
  );
}

export default Navbar;
