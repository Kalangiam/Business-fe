// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiJavascript,
} from "react-icons/si";
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
  // Sample data
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

  // Canvas starfield background
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        star.z -= 2;
        if (star.z <= 0) star.z = canvas.width;
        const k = 128.0 / star.z;
        const px = star.x * k + canvas.width / 2;
        const py = star.y * k + canvas.height / 2;
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / canvas.width) * 2;
          ctx.fillRect(px, py, size, size);
        }
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative min-h-screen py-16 px-6 lg:px-24 bg-black text-slate-100 overflow-hidden">
      {/* Starfield */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative flex flex-col items-center justify-center"
        >
          {/* Orbiting programming icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[
              { icon: <FaReact />, speed: "spin-slow", dir: "normal", color: "text-cyan-400" },
              { icon: <FaNodeJs />, speed: "spin-medium", dir: "reverse", color: "text-green-400" },
              { icon: <SiMongodb />, speed: "spin-fast", dir: "normal", color: "text-green-500" },
              { icon: <SiExpress />, speed: "spin-slow", dir: "reverse", color: "text-gray-300" },
              { icon: <FaPython />, speed: "spin-medium", dir: "reverse", color: "text-yellow-400" },
              { icon: <SiMysql />, speed: "spin-fast", dir: "reverse", color: "text-blue-400" },
              { icon: <SiPostgresql />, speed: "spin-slow", dir: "normal", color: "text-sky-400" },
              { icon: <SiDjango />, speed: "spin-medium", dir: "normal", color: "text-green-600" },
              { icon: <SiJavascript />, speed: "spin-fast", dir: "normal", color: "text-yellow-300" },
              { icon: <FaDatabase />, speed: "spin-slow", dir: "reverse", color: "text-indigo-400" },

            ].map((item, i) => (
              <div
                key={i}
                className={`absolute w-[180px] sm:w-[220px] md:w-[320px] h-[180px] sm:h-[220px] md:h-[320px] 
                  rounded-full border border-transparent animate-${item.speed} ${item.dir}`}
              >
                <div
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 
                    text-3xl ${item.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]
                    animate-pulse-slow`}
                >
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Glowing Shimmer Text */}
          <h1
            className="relative text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 
              bg-gradient-to-r from-indigo-400 via-pink-500 to-sky-400 bg-clip-text text-transparent 
              animate-shimmer"
          >
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
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
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
      </div>

      {/* Extra animations */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-medium { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-fast { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-spin-medium { animation: spin-medium 15s linear infinite; }
        .animate-spin-fast { animation: spin-fast 8s linear infinite; }
        .reverse { animation-direction: reverse; }
        @keyframes pulse-slow { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.15); opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
