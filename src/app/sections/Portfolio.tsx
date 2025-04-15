"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Define project type
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

// Define the projects
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    image: "/images/project1.jpg",
    description: "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Tauseef-Noor",
    demo: "#",
  },
  {
    id: 2,
    title: "AI Image Generator",
    category: "ai",
    image: "/images/project2.jpg",
    description: "An AI-powered application that generates images based on text descriptions using deep learning models.",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    github: "https://github.com/Tauseef-Noor",
    demo: "#",
  },
  {
    id: 3,
    title: "Corporate WordPress Site",
    category: "wordpress",
    image: "/images/project3.jpg",
    description: "A custom WordPress theme for a corporate client with advanced features and optimizations.",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
    github: "https://github.com/Tauseef-Noor",
    demo: "#",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    category: "data",
    image: "/images/project4.jpg",
    description: "Interactive dashboard for visualizing complex datasets with filtering and export capabilities.",
    technologies: ["React", "Electron.js", "Node.js", "MongoDB"],
    github: "https://github.com/Tauseef-Noor",
    demo: "#",
  },
  {
    id: 5,
    title: "Vehicle Management System",
    category: "app",
    image: "/images/project5.png",
    description: "Cross-platform Vehicle Management System with features like vehicle tracking, maintenance reminders, and fuel management.",
    technologies: ["Electron.js", "MongoDB", "Node.js"],
    github: "https://github.com/Tauseef-Noor",
    demo: "#",
  },
  {
    id: 6,
    title: "Research Paper Analysis Tool",
    category: "research",
    image: "/images/project6.jpg",
    description: "Tool for analyzing and extracting insights from academic research papers using NLP techniques.",
    technologies: ["Python", "NLTK", "Scikit-Learn", "Flask"],
    github: "https://github.com/Tauseef-Noor",
    demo: "#",
  },
];

// Define the filter categories
const categories = [
  { name: "All", value: "all" },
  { name: "Web", value: "web" },
  { name: "WordPress", value: "wordpress" },
  { name: "App", value: "app" },
  { name: "AI/ML", value: "ai" },
  { name: "Data", value: "data" },
  { name: "Research", value: "research" },
];

const Portfolio = () => {
  // Client-side only state
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  // Update filtered projects when filter changes
  useEffect(() => {
    if (filter === "all") {
      setDisplayedProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === filter);
      setDisplayedProjects(filtered);
    }
  }, [filter]);

  // Handle client-side rendering
  useEffect(() => {
    setMounted(true);
    // Initialize with all projects
    setDisplayedProjects(projects);
  }, []);

  // Prevent hydration errors by not rendering until client-side
  if (!mounted) {
    return (
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Portfolio
          </h2>
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Portfolio
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterChange(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
