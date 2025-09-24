// Portfolio.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enrichment Course App",
    desc: "MERN-based platform for course registration, schedules, mentor allocation, and certificate generation.",
    tech: ["React", "MongoDB", "Node.js", "Express"],
    img: "https://source.unsplash.com/600x400/?education,technology",
    demo: "#",
    github: "#",
    category: "Web Apps",
  },
  {
    title: "E-Commerce Store",
    desc: "Full-stack e-commerce site with product management, payments, and order tracking.",
    tech: ["React", "Redux", "MongoDB", "Node.js"],
    img: "https://source.unsplash.com/600x400/?ecommerce,shopping",
    demo: "#",
    github: "#",
    category: "Web Apps",
  },
  {
    title: "Event Management Portal",
    desc: "Platform to manage events, news, announcements, and media galleries.",
    tech: ["React", "Express", "MongoDB"],
    img: "https://source.unsplash.com/600x400/?events,conference",
    demo: "#",
    github: "#",
    category: "Media",
  },
  {
    title: "Admin Dashboard",
    desc: "Role-based authentication with JWT and CRUD operations for managing data.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "https://source.unsplash.com/600x400/?dashboard,analytics",
    demo: "#",
    github: "#",
    category: "Dashboards",
  },
  {
    title: "Learning Management System",
    desc: "Custom LMS for managing courses, classes, and student progress tracking.",
    tech: ["React", "MongoDB", "Node.js", "Express"],
    img: "https://source.unsplash.com/600x400/?learning,books",
    demo: "#",
    github: "#",
    category: "Web Apps",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with projects, blog, and contact form integration.",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: "https://source.unsplash.com/600x400/?portfolio,developer",
    demo: "#",
    github: "#",
    category: "Web Apps",
  },
  {
    title: "Media Library App",
    desc: "Upload, manage, and stream media content with authentication.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    img: "https://source.unsplash.com/600x400/?media,library",
    demo: "#",
    github: "#",
    category: "Media",
  },
  {
    title: "Finance Tracker",
    desc: "Track expenses, generate reports, and visualize spending habits.",
    tech: ["React", "Chart.js", "MongoDB", "Express"],
    img: "https://source.unsplash.com/600x400/?finance,charts",
    demo: "#",
    github: "#",
    category: "Utilities",
  },
  {
    title: "Chat App",
    desc: "Real-time chat with WebSocket and JWT authentication.",
    tech: ["React", "Node.js", "Socket.io"],
    img: "https://source.unsplash.com/600x400/?chat,messaging",
    demo: "#",
    github: "#",
    category: "Utilities",
  },
  {
    title: "Blog CMS",
    desc: "Create, edit, and publish articles with admin controls.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    img: "https://source.unsplash.com/600x400/?blog,writings",
    demo: "#",
    github: "#",
    category: "Dashboards",
  },
];

const categories = ["All", "Web Apps", "Dashboards", "Media", "Utilities"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-gradient-to-br from-gray-900 via-neutral-900 to-black text-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Our Portfolio</h1>
          <p className="mt-3 text-lg text-slate-300 max-w-3xl mx-auto">
            A showcase of some projects we’ve built with modern tools and technologies.
          </p>
        </motion.header>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-slate-300 hover:bg-indigo-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.05, y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg flex flex-col"
            >
              <img
                src={p.img}
                alt={p.title}
                className="rounded-lg mb-4 object-cover w-full h-40"
              />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2 flex-grow">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-indigo-600/30 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={p.demo}
                  className="text-sm text-indigo-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  className="text-sm text-slate-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
