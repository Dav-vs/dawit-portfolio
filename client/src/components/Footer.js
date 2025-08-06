import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 glassmorphism border-t border-glass-border">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <p className="text-secondary-text">
              © {currentYear} Dawit Sisay. Made with{' '}
              <FiHeart className="inline-block text-accent-color mx-1" />
              {' '}using React & Node.js
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-secondary-text hover:text-accent-color transition-colors duration-200"
            >
              <FiGithub size={24} />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-secondary-text hover:text-accent-color transition-colors duration-200"
            >
              <FiLinkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:davsis1993@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-secondary-text hover:text-accent-color transition-colors duration-200"
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 