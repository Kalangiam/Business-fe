// src/pages/Careers.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Careers() {
  const positions = [
    {
      title: "Frontend Developer",
      location: "Remote / On-site",
      desc: "Work with modern React and TailwindCSS to build beautiful user interfaces.",
    },
    {
      title: "Backend Developer",
      location: "Remote / On-site",
      desc: "Develop scalable APIs and work with databases like MongoDB and PostgreSQL.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      desc: "Design intuitive and engaging user experiences for web and mobile apps.",
    },
    {
      title: "Data Analyst",
      location: "Remote / On-site",
      desc: "Analyze data to provide insights and help drive business decisions.",
    },
  ];

  const benefits = [
    "Flexible work hours and remote options",
    "Collaborative and innovative team culture",
    "Opportunities to work with cutting-edge technologies",
    "Professional growth and learning resources",
  ];

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
            Join Our Team
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We are always looking for passionate and talented individuals to
            help us build innovative solutions. Explore our open positions and
            become part of a team that values creativity, collaboration, and
            growth.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#positions"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium"
            >
              Explore Openings
            </a>
            <a
              href="#benefits"
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition font-medium"
            >
              Why Work With Us
            </a>
          </div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          id="positions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((pos) => (
              <motion.div
                key={pos.title}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{pos.title}</h3>
                <p className="text-slate-400 mb-2">{pos.location}</p>
                <p className="text-slate-300 text-sm">{pos.desc}</p>
                <a
                  href="#apply"
                  className="mt-4 inline-block px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          id="benefits"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-10">Why Work With Us</h2>
          <ul className="max-w-2xl mx-auto space-y-4 text-slate-300 text-lg">
            {benefits.map((b, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-indigo-500 font-bold">•</span> {b}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          id="apply"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-2xl bg-gradient-to-br from-indigo-700/40 to-sky-700/20 border border-white/10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Submit your application or reach out to us to start your journey
            with a team that thrives on innovation and collaboration.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium"
          >
            Apply Today
          </a>
        </motion.section>
      </div>
    </div>
  );
}
