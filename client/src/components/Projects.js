import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import ParallaxLayers from './ParallaxLayers';
import api from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        // Fallback data
        setProjects([
          {
            _id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
            image: 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=E-Commerce',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
            githubUrl: 'https://github.com/yourusername/ecommerce',
            liveUrl: 'https://ecommerce-demo.com'
          },
          {
            _id: '2',
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team collaboration features.',
            image: 'https://via.placeholder.com/400x200/10B981/FFFFFF?text=Task+App',
            technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
            githubUrl: 'https://github.com/yourusername/task-app',
            liveUrl: 'https://task-app-demo.com'
          },
          {
            _id: '3',
            title: 'Portfolio Website',
            description: 'A responsive portfolio website built with modern technologies and smooth animations.',
            image: 'https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Portfolio',
            technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js'],
            githubUrl: 'https://github.com/yourusername/portfolio',
            liveUrl: 'https://portfolio-demo.com'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding">
        <div className="container-max">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary-bg rounded w-1/4 mb-16 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glassmorphism rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-secondary-bg"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-secondary-bg rounded w-3/4"></div>
                    <div className="h-4 bg-secondary-bg rounded w-full"></div>
                    <div className="h-4 bg-secondary-bg rounded w-2/3"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-secondary-bg rounded w-16"></div>
                      <div className="h-6 bg-secondary-bg rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Parallax Background Layers */}
      <ParallaxLayers />
      
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
              My Projects
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-secondary-text mb-6">
              Interested in working together? Let's discuss your project!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="button-primary"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 