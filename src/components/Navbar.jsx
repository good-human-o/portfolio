// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur border-b border-cyan-400/20" : "bg-transparent"
      }`}
    >
      {/* Desktop Centered Menu */}
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
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
        
        {/* Mobile menu button - right aligned */}
        <div className="md:hidden w-full flex justify-end">
          <button 
            className="text-cyan-400 hover:text-pink-400 transition-colors z-50"
            onClick={() => setSideMenuOpen(!sideMenuOpen)}
          >
            {sideMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Side Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur border-l border-cyan-400/20 transform transition-transform duration-300 ease-in-out z-40 ${
          sideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Side menu content */}
        <div className="flex flex-col h-full pt-20 px-6">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-lg"
                  onClick={() => setSideMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Optional: Social links at bottom of side menu */}
          <div className="mt-auto mb-10">
            <div className="w-full h-px bg-cyan-400/30 my-6"></div>
            <p className="text-gray-400 text-sm">© 2025 Anshul</p>
          </div>
        </div>
      </div>
      
      {/* Overlay when side menu is open */}
      {sideMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setSideMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;