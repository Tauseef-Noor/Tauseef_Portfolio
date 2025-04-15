"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaCode, 
  FaWordpress, 
  FaMobile, 
  FaBrain, 
  FaRobot, 
  FaChartBar, 
  FaSearch 
} from "react-icons/fa";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
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
        staggerChildren: 0.1,
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

  const services = [
    {
      icon: <FaCode size={40} />,
      title: "Web Development",
      description: "Custom responsive websites built with modern frameworks and best practices for optimal performance and user experience.",
    },
    {
      icon: <FaWordpress size={40} />,
      title: "WordPress Development",
      description: "Professional WordPress websites with custom themes, plugins, and optimizations for speed and security.",
    },
    {
      icon: <FaMobile size={40} />,
      title: "Application Development",
      description: "Cross-platform applications that deliver seamless experiences across desktop, web, and mobile devices.",
    },
    {
      icon: <FaBrain size={40} />,
      title: "Machine Learning",
      description: "Intelligent solutions using advanced ML algorithms to solve complex problems and extract valuable insights from data.",
    },
    {
      icon: <FaRobot size={40} />,
      title: "AI-Agents",
      description: "Custom AI agents and chatbots that automate tasks, enhance customer service, and improve business processes.",
    },
    {
      icon: <FaChartBar size={40} />,
      title: "Data Analysis",
      description: "Comprehensive data analysis services to help you understand trends, make informed decisions, and drive business growth.",
    },
    {
      icon: <FaSearch size={40} />,
      title: "Academic Research",
      description: "Thorough academic research with rigorous methodology and detailed analysis for publications and projects.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Services
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="card group"
            >
              <div className="text-blue-600 dark:text-blue-500 mb-4 group-hover:scale-110 transform transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
