// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaLock, FaMobileAlt, FaChalkboardTeacher, FaCogs, FaChartBar } from "react-icons/fa";
import { SiMongodb, SiReact, SiNodedotjs, SiExpress, SiNextdotjs } from "react-icons/si";

const services = [
  {
    category: "Core Services",
    items: [
      { title: "Custom Web Application Development", desc: "Full-stack apps with MERN. Scalable, secure, and responsive.", icon: SiReact },
      { title: "Business Website Development", desc: "Portfolios, company sites, institutional & educational pages.", icon: SiNextdotjs },
      { title: "E-commerce Development", desc: "Online stores, product management, payments & tracking.", icon: FaServer },
      { title: "API Development & Integration", desc: "REST/GraphQL APIs, third-party integrations.", icon: SiExpress },
      { title: "Admin Dashboards & Portals", desc: "Role-based auth, CMS, LMS, ERP-lite solutions.", icon: FaChartBar },
    ],
  },
  {
    category: "Add-on Services",
    items: [
      { title: "Authentication & Security", desc: "JWT, OAuth, Google/Facebook login.", icon: FaLock },
      { title: "Database Design & Management", desc: "MongoDB schema design, optimization.", icon: SiMongodb },
      { title: "SPAs & PWAs", desc: "Fast, offline-ready React apps.", icon: SiReact },
      { title: "Deployment & Hosting", desc: "AWS, Vercel, Netlify, Heroku, SSL setup.", icon: SiNodedotjs },
      { title: "Maintenance & Support", desc: "Bug fixes, updates, scaling.", icon: FaCogs },
    ],
  },
  {
    category: "Specialized Services",
    items: [
      { title: "Educational Platforms", desc: "Custom LMS, enrichment & e-learning apps.", icon: FaChalkboardTeacher },
      { title: "Event & Media Management", desc: "News, events, media libraries.", icon: FaServer },
      { title: "Custom Dashboards", desc: "Analytics, reporting, management tools.", icon: FaChartBar },
      { title: "Automation Tools", desc: "Internal tools for finance, HR, inventory.", icon: FaCogs },
      { title: "AI & Chatbot Integration", desc: "Simple chatbot APIs & AI features.", icon: FaMobileAlt },
    ],
  },
  {
    category: "Optional Complementary",
    items: [
      { title: "UI/UX Design", desc: "Wireframes & React UI with Figma.", icon: FaChalkboardTeacher },
      { title: "SEO & Performance", desc: "Optimization for speed & rankings.", icon: FaCogs },
      { title: "Mobile App Development", desc: "Cross-platform apps with React Native.", icon: FaMobileAlt },
      { title: "Consulting Services", desc: "Guidance for digital transformation.", icon: FaServer },
    ],
  },
];

export default function Services() {
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
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Services Offered</h1>
          <p className="mt-3 text-lg text-slate-300 max-w-3xl mx-auto">
            Explore the range of services we provide — from full-stack development to specialized solutions.
          </p>
        </motion.header>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.title}
                      whileHover={{ scale: 1.03, x: 6 }}
                      className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-600/30 text-indigo-300">
                        <Icon className="text-2xl" />
                      </div>
                      <div>
                        <div className="font-semibold">{s.title}</div>
                        <p className="text-sm text-slate-300">{s.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
