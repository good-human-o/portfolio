// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-white py-10 px-6 text-center overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-green-400/10 blur-3xl" />

      {/* Glowing Top Divider */}
      <div className="w-full h-[2px] mb-8 bg-gradient-to-r from-cyan-400 via-pink-500 to-green-400 blur-md animate-pulse" />

      <motion.div
        className="z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-pink-400 transition transform hover:scale-110 duration-300 animate-pulse"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-pink-400 transition transform hover:scale-110 duration-300 animate-pulse delay-100"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-pink-400 transition transform hover:scale-110 duration-300 animate-pulse delay-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-pink-400 transition transform hover:scale-110 duration-300 animate-pulse delay-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm tracking-wide font-mono">
          © {new Date().getFullYear()} Anshul — All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
