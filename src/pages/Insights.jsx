// src/pages/Insights.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Insights() {
  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-gradient-to-br from-gray-900 via-neutral-900 to-black text-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Insights: Navigating the Future of Technology
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore our curated collection of articles covering the latest trends in AI, startups, digital marketing, and more.
          </p>
        </motion.section>

        {/* Blog Categories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20"
        >
          {/* AI & Machine Learning */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-indigo-500 hover:underline">
                  The Democratization of AI: Implications for Startups
                </a>
                <p className="text-slate-300 text-sm">Exploring how AI adoption is accelerating across industries and its impact on innovation.</p>
              </li>
              <li>
                <a href="#" className="text-indigo-500 hover:underline">
                  Generative AI in Creative Industries: Opportunities and Challenges
                </a>
                <p className="text-slate-300 text-sm">Analyzing the role of generative AI in transforming creative processes and content creation.</p>
              </li>
            </ul>
          </div>

          {/* Startups & Entrepreneurship */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Startups & Entrepreneurship</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-indigo-500 hover:underline">
                  Top IT Startup Ideas for 2025: What’s Next?
                </a>
                <p className="text-slate-300 text-sm">Identifying emerging IT startup opportunities and market niches for the coming year.</p>
              </li>
              <li>
                <a href="#" className="text-indigo-500 hover:underline">
                  Navigating the Startup Ecosystem: Trends and Insights
                </a>
                <p className="text-slate-300 text-sm">Understanding the evolving startup landscape and strategies for success.</p>
              </li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-indigo-500 hover:underline">
                  The Rise of Answer Engine Optimization (AEO)
                </a>
                <p className="text-slate-300 text-sm">Exploring the shift from traditional SEO to AEO in the age of AI-driven search.</p>
              </li>
              <li>
                <a href="#" className="text-indigo-500 hover:underline">
                  Social Media Trends in 2025: What Marketers Need to Know
                </a>
                <p className="text-slate-300 text-sm">Analyzing the latest social media trends and their implications for digital marketing strategies.</p>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Featured Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Article 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg">
              <h4 className="text-lg font-semibold mb-2">
                The Future of Wearable Technology in Fashion
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                Analyzing how AI-powered wearables are revolutionizing the fashion industry.
              </p>
              <a href="#" className="text-indigo-500 hover:underline">
                Read More
              </a>
            </div>

            {/* Article 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg">
              <h4 className="text-lg font-semibold mb-2">
                Decentralized Finance: The Next Frontier
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                Exploring the rise of DeFi and its impact on traditional financial systems.
              </p>
              <a href="#" className="text-indigo-500 hover:underline">
                Read More
              </a>
            </div>

            {/* Article 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg">
              <h4 className="text-lg font-semibold mb-2">
                Navigating the Quantum Computing Landscape
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                Understanding the potential and challenges of quantum computing technologies.
              </p>
              <a href="#" className="text-indigo-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
