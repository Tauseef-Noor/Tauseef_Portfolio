"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaWordpress, 
  FaBootstrap,
  FaChartBar,
  FaCode
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiLatex, 
  SiElectron, 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn
} from "react-icons/si";

const Tools = () => {
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
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const tools = [
    { icon: <FaPython size={40} />, name: "Python", color: "#3776AB" },
    { icon: <SiTensorflow size={40} />, name: "TensorFlow", color: "#FF6F00" },
    { icon: <SiScikitlearn size={40} />, name: "Scikit-Learn", color: "#F7931E" },
    { icon: <SiPytorch size={40} />, name: "PyTorch", color: "#EE4C2C" },
    { icon: <FaReact size={40} />, name: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js", color: "#000000" },
    { icon: <FaBootstrap size={40} />, name: "Bootstrap", color: "#7952B3" },
    { icon: <FaHtml5 size={40} />, name: "HTML", color: "#E34F26" },
    { icon: <FaJs size={40} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaNodeJs size={40} />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress size={40} />, name: "Express.js", color: "#000000" },
    { icon: <SiMysql size={40} />, name: "MySQL", color: "#4479A1" },
    { icon: <SiMongodb size={40} />, name: "MongoDB", color: "#47A248" },
    { icon: <FaCss3Alt size={40} />, name: "CSS", color: "#1572B6" },
    { icon: <FaCode size={40} />, name: "C#", color: "#239120" },
    { icon: <FaChartBar size={40} />, name: "SPSS", color: "#CC2927" },
    { icon: <SiLatex size={40} />, name: "LaTeX", color: "#008080" },
    { icon: <SiElectron size={40} />, name: "Electron", color: "#47848F" },
    { icon: <FaWordpress size={40} />, name: "WordPress", color: "#21759B" },
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-[#111827]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Toolbox
        </motion.h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          I work with a variety of technologies and tools to build robust, scalable, and efficient solutions.
        </p>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="w-20 h-20 flex items-center justify-center bg-white dark:bg-[#1e293b] rounded-full shadow-md mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ color: tool.color }}
              >
                {tool.icon}
              </motion.div>
              <h3 className="text-gray-800 dark:text-white font-medium text-center">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
