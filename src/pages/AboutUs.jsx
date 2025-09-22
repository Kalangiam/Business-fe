import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaServer,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

// AboutUs.jsx
// Drop-in About / Team page with Tailwind + Framer Motion animations.
// - Default export React component
// - Uses Tailwind utility classes (make sure Tailwind is configured in your project)
// - Uses framer-motion for entrance and hover animations
// - Uses react-icons for tech icons (MERN, Python, SQL, Docker, Git...)

const techIcons = [
  { name: "React", Icon: FaReact },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express", Icon: SiExpress },
  { name: "Python", Icon: SiPython },
  { name: "Postgres", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Docker", Icon: FaDocker },
  { name: "Git", Icon: FaGitAlt },
  { name: "Server", Icon: FaServer },
];

const IconBubble = ({ Icon, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.15 + delay, type: "spring", stiffness: 120 }}
    className="flex items-center justify-center flex-col w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/5 shadow-md"
  >
    <Icon className="text-3xl" />
    <span className="text-xs mt-1 text-center">{label}</span>
  </motion.div>
);

const marqueeStyle = {
  WebkitMaskImage:
    "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-gradient-to-br from-gray-900 via-neutral-900 to-black text-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="mt-3 text-lg text-slate-300 max-w-3xl">
            We build production-ready web and data products using modern tools.
            Focused on rapid MVPs, scalable backends and clean visual
            experiences. Our stack includes MERN, Python data pipelines, SQL
            databases and cloud-native deployments.
          </p>
        </motion.header>

        {/* Tech marquee */}
        <section className="relative mb-12">
          <div
            className="overflow-hidden rounded-xl py-6"
            style={{ background: "linear-gradient(90deg,#0f172a 0%, rgba(15,23,42,0.6) 100%)" }}
          >
            <div
              className="flex gap-8 whitespace-nowrap animate-marquee will-change-transform"
              style={marqueeStyle}
            >
              {techIcons.concat(techIcons).map((t, i) => {
                const C = t.Icon;
                return (
                  <div
                    key={t.name + i}
                    className="flex items-center gap-3 px-6 py-2 rounded-lg border border-white/5 bg-white/3"
                  >
                    <C className="text-3xl" />
                    <span className="font-medium text-sm">{t.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee { animation: marquee 18s linear infinite; }
            @media (max-width: 640px) {
              .animate-marquee { animation-duration: 28s; }
            }
          `}</style>
        </section>

        {/* Mission & Vision + CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-white/6"
          >
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-slate-300">Deliver fast, reliable and
              maintainable software that helps businesses make better decisions and
              scale efficiently.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-white/6"
          >
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-slate-300">Be a trusted partner for data-driven
              products and cloud-native applications in APAC and beyond.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl flex flex-col justify-between bg-gradient-to-br from-indigo-700/30 to-sky-700/10 border border-white/6"
          >
            <div>
              <h3 className="text-2xl font-semibold">Join Us</h3>
              <p className="mt-3 text-slate-200">Looking to collaborate or hire
                us for a project? We ship within weeks and iterate fast.</p>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-5 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform"
              >
                Contact the team
              </a>
            </div>
          </motion.div>
        </section>

        {/* Team & Personality */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Mohamed Nihmathullah", role: "Full‑Stack Developer" },
              { name: "Kanimozhi", role: "UIUX Designer" },
              { name: "Kalangiam", role: "Data & ML" },
              { name: "Designer (Placeholder)", role: "Product & UX" },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                whileHover={{ scale: 1.03, y: -6 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-white/6 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-black font-bold">
                    {p.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-slate-300">{p.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-slate-300 text-sm">
                  Passionate about building pragmatic software and data
                  solutions. Loves clean code, automated tests and readable docs.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Floating icon grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Tech we love</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-4">
            {techIcons.map((t, i) => {
              const C = t.Icon;
              return (
                <motion.div
                  key={t.name}
                  whileHover={{ scale: 1.15 }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-white/3 border border-white/6"
                >
                  <C className="text-2xl" />
                  <span className="text-xs text-slate-300">{t.name}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/4 to-white/3 border border-white/6 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Ready to build something?</div>
            <div className="text-sm text-slate-300">Tell us about your idea and we'll
              make a plan.</div>
          </div>
          <div className="mt-4 sm:mt-0">
            <a href="#contact" className="px-4 py-2 rounded-lg bg-white/10 border border-white/10">Let's talk</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
