"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Tools", href: "#tools" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="#home">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600 dark:text-blue-500"
          >
            Tauseef Noor
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-[#1e293b] shadow-xl fixed left-0 right-0 overflow-hidden max-w-full"
          style={{ maxWidth: '100vw' }}
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 font-medium py-3 px-6 border-b border-gray-100 dark:border-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
