import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs
} from "react-icons/fa";
import {
  SiTailwindcss, SiCplusplus, SiPython
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-300" },
  { icon: <SiCplusplus />, name: "C++", color: "text-indigo-400" },
  { icon: <SiPython />, name: "Python", color: "text-yellow-300" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-6 bg-black text-white text-center overflow-hidden"
    >

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-green-400/10 blur-3xl" />

      <div className="z-10 relative max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 font-orbitron">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-md hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-400/30 transition-all duration-300 group"
            >
              <div className={`text-4xl ${skill.color} mb-2 group-hover:scale-125 transition duration-300`}>
                {skill.icon}
              </div>
              <p className="text-gray-300 font-semibold group-hover:text-cyan-300 transition">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
