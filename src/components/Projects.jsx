import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MindMaze",
    description: "A Java-based puzzle adventure game with  interactions.",
    tech: ["Java", "Game Design"],
    link: "#",
  },
  {
    title: "Portfolio101",
    description: "This very portfolio — built with React and Tailwind, glowing with sci-fi vibes.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Memory Manager",
    description: "A C++ custom memory manager for low-level optimization.",
    tech: ["C++", "Memory", "System Design"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-6 bg-black text-white text-center overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-cyan-500/10 via-pink-500/10 to-green-400/10 blur-3xl" />

      <div className="z-10 relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 font-orbitron">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-cyan-400/20 backdrop-blur-md p-6 rounded-2xl text-left hover:scale-[1.03] transition-all duration-300 shadow-md hover:shadow-cyan-400/30 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-pink-400 to-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>

              <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-pink-400 transition">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-sm px-2 py-1 rounded-full font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-pink-400 underline hover:text-cyan-300"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
