// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaChartLine, FaCloud } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  // Sample data (replace with real stats later)
  const pieData = [
    { name: "Projects Completed", value: 65 },
    { name: "Ongoing Projects", value: 20 },
    { name: "Upcoming Projects", value: 15 },
  ];

  const COLORS = ["#6366F1", "#22D3EE", "#FBBF24"];

  const barData = [
    { year: "2021", projects: 12 },
    { year: "2022", projects: 22 },
    { year: "2023", projects: 35 },
    { year: "2024", projects: 48 },
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

        {/* Analytics Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pie Chart */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-6">Project Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-6">Projects Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Bar dataKey="projects" fill="#6366F1" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

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
