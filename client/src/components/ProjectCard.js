import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-500',
      'Node.js': 'bg-green-500',
      'MongoDB': 'bg-green-600',
      'Express': 'bg-gray-500',
      'TypeScript': 'bg-blue-600',
      'Tailwind CSS': 'bg-cyan-500',
      'Next.js': 'bg-black',
      'PostgreSQL': 'bg-blue-700',
      'Firebase': 'bg-orange-500',
      'AWS': 'bg-yellow-500',
      'Docker': 'bg-blue-400',
      'GraphQL': 'bg-pink-600',
      'Redux': 'bg-purple-500',
      'Jest': 'bg-red-500',
      'Webpack': 'bg-blue-300',
      'Vite': 'bg-purple-400',
      'Sass': 'bg-pink-500',
      'Material-UI': 'bg-blue-500',
      'Chakra UI': 'bg-teal-500',
      'Framer Motion': 'bg-purple-600',
    };
    return colors[tech] || 'bg-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 15 : 0,
          rotateY: isHovered ? 10 : 0,
          scale: isHovered ? 1.02 : 1,
          z: isHovered ? 20 : 0,
        }}
        transition={{ 
          duration: 0.4,
          ease: "easeOut"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="glassmorphism rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 preserve-3d"
      >
        {/* Project Image */}
        <motion.div 
          className="relative h-48 overflow-hidden"
          animate={{
            rotateX: isHovered ? 5 : 0,
            rotateY: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.img
            src={project.image || 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=Project'}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            animate={{
              scale: isHovered ? 1.15 : 1,
              filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)',
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay with buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center gap-4"
          >
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 10,
                  z: 30,
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glassmorphism rounded-full text-accent-color hover:text-accent-purple transition-colors duration-200 preserve-3d"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <FiGithub size={24} />
              </motion.a>
            )}
            
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  rotateY: -10,
                  z: 30,
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glassmorphism rounded-full text-accent-color hover:text-accent-purple transition-colors duration-200 preserve-3d"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <FiExternalLink size={24} />
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Project Content */}
        <div className="p-6">
          {/* Title with Gradient */}
          <h3 className="text-xl font-bold mb-3 gradient-text">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-secondary-text mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  z: 15,
                }}
                className="px-3 py-1 text-xs font-medium text-accent-color rounded-full glassmorphism preserve-3d"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 glassmorphism text-accent-color rounded-lg hover:text-accent-purple transition-colors duration-200 text-sm font-medium"
              >
                <FiGithub size={16} />
                Code
              </motion.a>
            )}
            
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 button-primary text-sm"
              >
                <FiExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 