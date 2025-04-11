// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-center items-center font-orbitron transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur border-b border-cyan-400/20" : "bg-transparent"
      }`}
    >
      <ul className="flex space-x-6 text-sm md:text-base uppercase tracking-wider">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
