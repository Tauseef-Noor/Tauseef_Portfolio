"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaLaptopCode, FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stats = [
    { icon: <FaCode size={24} />, value: "3+", label: "Years Experience" },
    { icon: <FaLaptopCode size={24} />, value: "50+", label: "Projects Completed" },
    { icon: <FaGraduationCap size={24} />, value: "10+", label: "Certifications" },
  ];

  const education = [
    { 
      icon: <FaSchool size={24} />, 
      degree: "Matric, Science", 
      year: "2016", 
      institution: "Islamia Collegiate",
      color: "bg-blue-500" 
    },
    { 
      icon: <FaSchool size={24} />, 
      degree: "Fsc, Pre-Engineering", 
      year: "2018", 
      institution: "Leeds College of Science",
      color: "bg-purple-500" 
    },
    { 
      icon: <FaUniversity size={24} />, 
      degree: "BS Computer Science", 
      year: "2022", 
      institution: "City University of Science and Information Technology",
      color: "bg-green-500" 
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#111827]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          <motion.div 
            variants={itemVariants} 
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full h-[450px] md:h-[500px]">
              {/* Animated dotted border */}
              <motion.div 
                className="absolute inset-0 rounded-xl border-4 border-dashed border-purple-500/50"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Inner image container with slight padding for the border */}
              <div className="absolute inset-1 rounded-xl overflow-hidden">
                <Image 
                  src="/images/about.png?v=3" 
                  alt="Tauseef Noor working" 
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-2xl"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-4 top-1/4 h-20 w-20 bg-blue-500/20 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-4 bottom-1/4 h-16 w-16 bg-purple-500/20 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute left-1/4 -bottom-4 h-12 w-12 bg-green-500/20 rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              I&apos;m a passionate developer with expertise in multiple domains
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400">
              With over 3 years of experience in the tech industry, I specialize in creating innovative solutions across web development, WordPress, application development, machine learning, AI agents, and data analysis. My academic background also allows me to conduct thorough research for complex projects.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400">
              I believe in continuous learning and staying updated with the latest technologies. My goal is to deliver high-quality, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow-md"
                >
                  <div className="text-blue-600 dark:text-blue-500 mb-2">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
            

            
            <div className="flex justify-center md:justify-start mt-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block btn btn-primary"
              >
                Get In Touch
              </motion.a>
            </div>
            
            {/* Education Timeline */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <FaGraduationCap className="mr-2 text-blue-600 dark:text-blue-500" /> Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={controls}
                    variants={{
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 0.3 + (index * 0.2),
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    {/* Timeline connector */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                    )}
                    
                    <div className="flex items-start">
                      {/* Education icon */}
                      <motion.div 
                        className={`flex-shrink-0 w-12 h-12 rounded-full ${edu.color} flex items-center justify-center text-white shadow-md z-10`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {index === 2 ? <FaUniversity size={20} /> : <FaSchool size={20} />}
                      </motion.div>
                      
                      {/* Education content */}
                      <div className="ml-4 bg-white dark:bg-[#1e293b] p-4 rounded-lg shadow-md flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                          <span className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{edu.year}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.institution}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
