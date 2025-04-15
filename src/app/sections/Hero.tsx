"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Web Developer | WordPress Expert | ML Engineer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-1 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-10 md:mb-0"
        >
          <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-500">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
            Tauseef Noor
          </h1>
          <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 h-8">
            {text}
            <span className="animate-blink">|</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
            I build exceptional digital experiences that combine beautiful design with cutting-edge technology. Let's bring your ideas to life!
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            <motion.a 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn btn-primary"
            >
              Contact Me
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="btn btn-secondary"
            >
              Download Resume
            </motion.a>
          </div>
          
          <div className="flex space-x-6 justify-center md:justify-start pt-4">
            <motion.a 
              whileHover={{ y: -3, color: "#0077b5" }}
              href="https://linkedin.com/in/tauseef-noor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: "#D44638" }}
              href="mailto:tauseef.noor.69@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: "#25D366" }}
              href="https://wa.me/923436012198" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
            >
              <FaWhatsapp size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: "#333" }}
              href="https://github.com/Tauseef-Noor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              <FaGithub size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          {/* Animated dotted border container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated dotted border */}
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/50"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Inner image container with slight padding for the border */}
            <div className="absolute inset-4 rounded-full overflow-hidden">
              <Image 
                src="/images/profile.png" 
                alt="Tauseef Noor" 
                fill
                style={{ objectFit: "contain" }}
                priority
                className="drop-shadow-2xl"
              />
            </div>
            
            {/* Social media floating elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            >
              <FaLinkedin size={20} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-1/4 -left-4 bg-red-600 text-white p-3 rounded-full shadow-lg"
            >
              <FaEnvelope size={20} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute bottom-1/4 -right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg"
            >
              <FaGithub size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
