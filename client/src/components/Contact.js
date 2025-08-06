import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import toast from 'react-hot-toast';
import api from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const textareaRef = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [formData.message]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      await api.sendMessage(formData);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
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
              Get In Touch
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">
                    Let's Work Together
                  </h3>
                  <p className="text-secondary-text mb-8 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                      <FiMail className="text-accent-color" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-text">Email</h4>
                      <p className="text-secondary-text">davsis1993@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                      <FiUser className="text-accent-color" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-text">Location</h4>
                      <p className="text-secondary-text">Available for remote work worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                      <FiMessageSquare className="text-accent-color" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-text">Response Time</h4>
                      <p className="text-secondary-text">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glassmorphism rounded-2xl shadow-xl p-8"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`input-field pl-12 ${
                            focusedField === 'name' ? 'ring-2 ring-accent-color border-accent-color' : ''
                          }`}
                          placeholder="Your name"
                          required
                        />
                        <FiUser 
                          size={20} 
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                            focusedField === 'name' ? 'text-accent-color' : 'text-secondary-text'
                          }`} 
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`input-field pl-12 ${
                            focusedField === 'email' ? 'ring-2 ring-accent-color border-accent-color' : ''
                          }`}
                          placeholder="your.email@example.com"
                          required
                        />
                        <FiMail 
                          size={20} 
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                            focusedField === 'email' ? 'text-accent-color' : 'text-secondary-text'
                          }`} 
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          ref={textareaRef}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className={`input-field pl-12 resize-none min-h-[120px] ${
                            focusedField === 'message' ? 'ring-2 ring-accent-color border-accent-color' : ''
                          }`}
                          placeholder="Tell me about your project..."
                          required
                        />
                        <FiMessageSquare 
                          size={20} 
                          className={`absolute left-4 top-4 ${
                            focusedField === 'message' ? 'text-accent-color' : 'text-secondary-text'
                          }`} 
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full button-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 