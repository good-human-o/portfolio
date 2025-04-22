import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-green-400/10 blur-3xl" />

      <Parallax speed={-10}>
        <div className="absolute inset-0 z-0 bg-[url('/src/assets/circuit-pattern.svg')] opacity-10 bg-cover bg-center" />
      </Parallax>

      <motion.div
        className="z-10 px-4 max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
                <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-rajdhani text-cyan-300 mb-3"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hello! I am
        </motion.h1>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-9xl font-extrabold font-rajdhani tracking-wide text-white flex flex-wrap justify-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {["A", "n", "s", "h", "u", "l"].map((char, i) => (
            <span
              key={i}
              className="glitch-slice glitch-letter-multi text-white hover:text-yellow-300 transition-all duration-200"
              data-text={char}
            >
              {char}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mt-6 text-gray-300 font-light max-w-xl mx-auto px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Typewriter
            words={[
              "Computer Science Student.",
              "Front-end Developer.",
              "App Developer.",
              "Web Developer.",
              "UX/UI Designer.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block mt-10 px-6 sm:px-8 py-3 rounded-xl bg-cyan-400 text-black text-base sm:text-lg font-semibold hover:bg-pink-500 hover:text-white transition duration-300 shadow-xl shadow-cyan-500/30"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;