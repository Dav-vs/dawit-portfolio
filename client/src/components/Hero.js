import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiCode, FiMonitor, FiSmartphone } from 'react-icons/fi';
import api from '../utils/api';
import Desk3D from './3DDesk';

const Hero = () => {
  const [heroData, setHeroData] = useState({
    name: 'Dawit Sisay',
    summary: 'Full-stack developer passionate about creating innovative web solutions with modern technologies.',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await api.getHero();
        setHeroData(data);
      } catch (error) {
        console.error('Failed to fetch hero data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-color"></div>
      </div>
    );
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-accent-color font-mono mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 font-mono"
          >
            <span className="gradient-text">{heroData.name}</span>
            <span className="inline-block w-2 h-20 bg-accent-color ml-4 animate-pulse"></span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-secondary-text"
          >
            I build things for the web.
          </motion.h2>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-secondary-text mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {heroData.summary}
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center gap-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center text-accent-color"
            >
              <FiCode size={32} />
              <span className="text-sm mt-2">Frontend</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center text-accent-color"
            >
              <FiMonitor size={32} />
              <span className="text-sm mt-2">Backend</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center text-accent-color"
            >
              <FiSmartphone size={32} />
              <span className="text-sm mt-2">Mobile</span>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="button-primary flex items-center gap-3 text-lg"
            >
              <FiArrowDown size={24} />
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="button-secondary flex items-center gap-3 text-lg"
            >
              <FiDownload size={24} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 3D Desk Scene */}
      <Desk3D />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-4 h-4 bg-accent-color rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-6 h-6 bg-accent-purple rounded-full opacity-20"
      />
    </section>
  );
};

export default Hero; 