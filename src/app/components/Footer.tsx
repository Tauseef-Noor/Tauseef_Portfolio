"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home">
              <h3 className="text-2xl font-bold text-blue-500">Tauseef Noor</h3>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Building exceptional digital experiences with modern technologies and creative solutions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -5, color: "#0077b5" }}
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#333" }}
                href="https://github.com/Tauseef-Noor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#D44638" }}
                href="mailto:tauseef.noor.69@gmail.com" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {currentYear} Tauseef Noor. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
