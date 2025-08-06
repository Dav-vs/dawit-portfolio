const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

// Sample projects data
const sampleProjects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React, Node.js, and MongoDB. Features smooth animations, dark mode toggle, and dynamic content management. Includes dynamic content editing, project CRUD operations, and contact message management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com"
  },
  {
    title: "E-commerce Platform",
    description: "An e-commerce platform with product listings, shopping cart functionality, secure checkout process, and inventory management. Features payment integration, order tracking, and user reviews.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redux"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://yourecommerce.com"
  },
  {
    title: "Task Manager App",
    description: "A full-featured task management application with user authentication, real-time updates, drag-and-drop task organization, and collaborative features. Includes project boards, task assignments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/yourusername/taskmanager",
    liveUrl: "https://yourtaskmanager.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard application with real-time weather data, location-based forecasts, and interactive maps. Features temperature tracking, precipitation predictions, and weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://yourweatherapp.com"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard with data visualization, trend analysis, and performance metrics. Includes engagement tracking, content scheduling, and audience insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://yoursocialdashboard.com"
  }
];

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Seed the database
const seedProjects = async () => {
  try {
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert sample projects
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`Successfully inserted ${insertedProjects.length} projects:`);
    
    insertedProjects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
    });

    console.log('\nDatabase seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
const runSeed = async () => {
  await connectDB();
  await seedProjects();
};

runSeed(); 