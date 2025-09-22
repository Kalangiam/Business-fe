// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaChartLine, FaCloud } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-gradient-to-br from-gray-900 via-neutral-900 to-black text-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Building the Future with Code
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We craft scalable, modern, and data-driven web solutions for startups
            and enterprises. From full-stack applications to AI-powered
            platforms, we transform ideas into reality.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/about"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition font-medium"
            >
              Contact Us
            </a>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <FaLightbulb className="text-3xl" />,
              title: "Innovative Ideas",
              desc: "We design and develop solutions tailored to your business needs and goals.",
            },
            {
              icon: <FaCode className="text-3xl" />,
              title: "Full-Stack Development",
              desc: "From frontend to backend, we deliver robust and clean codebases.",
            },
            {
              icon: <FaChartLine className="text-3xl" />,
              title: "Data-Driven Insights",
              desc: "Unlock the power of data with analytics, dashboards, and ML models.",
            },
            {
              icon: <FaCloud className="text-3xl" />,
              title: "Cloud-Native Apps",
              desc: "Deploy scalable applications with modern DevOps and cloud platforms.",
            },
          ].map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center shadow-lg"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-indigo-600/30 text-indigo-300 mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Call to Action Banner */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-2xl bg-gradient-to-br from-indigo-700/40 to-sky-700/20 border border-white/10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Kickstart Your Project?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Partner with us to design, build, and scale digital products that
            stand out in performance and design.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium"
          >
            Let’s Build Together
          </a>
        </motion.section>
      </div>
    </div>
  );
}
