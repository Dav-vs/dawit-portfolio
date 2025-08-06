import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track which section is currently in view
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const getNavItemStyle = (itemId) => {
    const isActive = activeSection === itemId;
    return {
      base: `font-medium transition-all duration-300 ${
        isActive 
          ? 'text-accent-color glow-text' 
          : 'text-secondary-text hover:text-accent-color'
      }`,
      glow: isActive ? 'animate-glow' : ''
    };
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold cursor-pointer font-mono transition-all duration-300 ${
              activeSection === 'hero' ? 'gradient-text glow-text animate-glow' : 'gradient-text'
            }`}
            onClick={() => scrollToSection('hero')}
          >
            DS
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const styles = getNavItemStyle(item.id);
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={styles.base}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg glassmorphism text-accent-color hover:text-accent-purple transition-all duration-300 relative overflow-hidden group"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-accent-color/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                initial={false}
                animate={{ scale: isDark ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glassmorphism text-accent-color hover:text-accent-purple transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden glassmorphism border-t border-glass-border"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => {
              const styles = getNavItemStyle(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-all duration-300 font-medium py-2 ${
                    activeSection === item.id 
                      ? 'text-accent-color glow-text animate-glow' 
                      : 'text-secondary-text hover:text-accent-color'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 