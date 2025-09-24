// src/pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-gradient-to-br from-gray-900 via-neutral-900 to-black text-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Protecting your privacy is important to us. This page explains how we collect, use, and safeguard your information when you use our website or services.
          </p>
        </motion.section>

        {/* Policy Content */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-slate-300"
        >
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
            <p className="mb-2">
              We may collect the following types of information from you:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Personal Information:</strong> Name, email, phone number, and other details you provide when submitting forms, applying for jobs, or subscribing.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Browser type, IP address, device info, pages visited, and analytics data collected automatically.
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> Cookies and similar technologies help us track usage, analyze trends, and improve user experience.
              </li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide and improve our services.</li>
              <li>Respond to inquiries and applications.</li>
              <li>Send newsletters and updates (with your consent).</li>
              <li>Analyze website usage and performance.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          {/* 3. Sharing Your Information */}
          <div>
            <h2 className="text-2xl font-bold mb-2">3. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information. We may share information:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>With trusted service providers who assist in website or service operations.</li>
              <li>When required by law or to protect our rights.</li>
              <li>In business transfers, mergers, or acquisitions.</li>
            </ul>
          </div>

          {/* 4. Your Rights */}
          <div>
            <h2 className="text-2xl font-bold mb-2">4. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information, and opt-out of marketing communications. To exercise these rights, contact us at <strong>[your email]</strong>.
            </p>
          </div>

          {/* 5. Security */}
          <div>
            <h2 className="text-2xl font-bold mb-2">5. Security</h2>
            <p>
              We implement measures to protect your information from unauthorized access, loss, or misuse. However, no method over the internet is 100% secure.
            </p>
          </div>

          {/* 6. Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold mb-2">6. Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing any information.
            </p>
          </div>

          {/* 7. Children’s Privacy */}
          <div>
            <h2 className="text-2xl font-bold mb-2">7. Children’s Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* 8. Changes to This Policy */}
          <div>
            <h2 className="text-2xl font-bold mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. The "Effective Date" reflects the latest version. We encourage you to review this page periodically.
            </p>
          </div>

          {/* 9. Contact Us */}
          <div>
            <h2 className="text-2xl font-bold mb-2">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your personal data, contact us at:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Email:</strong> [your email]</li>
              <li><strong>Address:</strong> [optional: your office address]</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
