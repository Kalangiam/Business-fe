// Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect with backend API or Nodemailer
    alert("Message sent! (Replace with backend integration)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-gradient-to-br from-black via-neutral-900 to-gray-900 text-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-3 text-lg text-slate-300 max-w-3xl mx-auto">
            Have a project idea or just want to say hello? Fill out the form below and we’ll get back to you soon.
          </p>
        </motion.header>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4 text-slate-300">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-400" /> info@yourcompany.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-indigo-400" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-400" /> Pune, Maharashtra, India
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-indigo-400 hover:text-indigo-300 text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
