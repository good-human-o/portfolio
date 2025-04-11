// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-green-400/10 blur-3xl" />

      <motion.div
        className="z-10 max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Larger Floating Image - Vertically Centered */}
        <motion.img
          src="../Images/profile202.jpg"
          alt="Anshul"
className="w-44 h-44 md:w-60 md:h-60 rounded-full border-4 border-cyan-400 shadow-lg ring-4 ring-cyan-400/30 hover:ring-pink-400/40 transition duration-300"
          initial={{ y: 10 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* About Text */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-cyan-400/30 shadow-lg p-8 rounded-2xl text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 font-orbitron mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            I am a passionate Computer Science Engineering student with a strong focus on software development, project-based learning, and emerging technologies.
            Currently, I am expanding my expertise in frontend development, working with React and Tailwind CSS, while also exploring areas like artificial intelligence, systems programming, and game development using languages such as C++, Python, and Java.
            I am actively looking for a challenging role where I can leverage my technical foundation, problem-solving mindset, and passion for innovation to contribute to impactful projects, while growing within a collaborative and forward-thinking team environment.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
