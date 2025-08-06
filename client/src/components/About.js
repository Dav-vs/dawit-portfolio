import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import api from '../utils/api';

const About = () => {
  const [aboutData, setAboutData] = useState({
    jobTitle: 'Full Stack Developer',
    bio: 'Passionate developer with expertise in modern web technologies. I love creating user-friendly applications that solve real-world problems.',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Express.js'],
    socialLinks: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      email: 'davsis1993@example.com'
    }
  });
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await api.getAbout();
        setAboutData(data);
      } catch (error) {
        console.error('Failed to fetch about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <div className="section-padding">
        <div className="container-max">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary-bg rounded w-1/4 mb-8"></div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-64 h-64 bg-secondary-bg rounded-full mx-auto lg:mx-0"></div>
              <div className="flex-1 space-y-4">
                <div className="h-4 bg-secondary-bg rounded w-3/4"></div>
                <div className="h-4 bg-secondary-bg rounded w-full"></div>
                <div className="h-4 bg-secondary-bg rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative perspective-1000"
            >
              <motion.div 
                className="w-64 h-64 rounded-full overflow-hidden shadow-2xl relative group glassmorphism preserve-3d"
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.05,
                  z: 30,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/256x256/64ffda/0a192f?text=Profile';
                  }}
                  whileHover={{
                    scale: 1.15,
                    filter: 'brightness(1.1) contrast(1.1)',
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-accent-color/20 to-transparent"
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-color rounded-full opacity-80 preserve-3d"
              ></motion.div>
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-purple rounded-full opacity-80 preserve-3d"
              ></motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="flex-1 text-center lg:text-left"
            >
              {/* Job Title with Animated Underline */}
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold mb-4 relative inline-block text-accent-color"
              >
                {aboutData.jobTitle}
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-color to-accent-purple rounded-full"
                ></motion.div>
              </motion.h3>

              {/* Bio */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-secondary-text mb-8 leading-relaxed"
              >
                {aboutData.bio}
              </motion.p>

              {/* Skills */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <h4 className="text-lg font-semibold mb-4 text-primary-text">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {aboutData.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -5,
                        rotateY: 10,
                        z: 20,
                      }}
                      className="px-4 py-2 glassmorphism text-accent-color rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-medium preserve-3d"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href={aboutData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotateY: 15,
                    z: 25,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glassmorphism text-accent-color rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:text-accent-purple preserve-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <FiGithub size={24} />
                </motion.a>
                
                <motion.a
                  href={aboutData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotateY: -15,
                    z: 25,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glassmorphism text-accent-color rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:text-accent-purple preserve-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <FiLinkedin size={24} />
                </motion.a>
                
                <motion.a
                  href={`mailto:${aboutData.socialLinks.email}`}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotateY: 10,
                    z: 25,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glassmorphism text-accent-color rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:text-accent-purple preserve-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <FiMail size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 