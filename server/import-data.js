const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://davsis1993:DJ8lKgguUWX70xPP@cluster0.8yuqkkn.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';

// Sample data to import
const sampleData = {
  hero: {
    name: "Dawit Sisay",
    summary: "Full Stack Developer passionate about creating innovative web solutions"
  },
  about: {
    jobTitle: "Full Stack Developer",
    bio: "Experienced developer with expertise in React, Node.js, and MongoDB. Passionate about creating user-friendly applications.",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript", "Tailwind CSS"],
    socialLinks: {
      github: "https://github.com/davsis1993",
      linkedin: "https://linkedin.com/in/davsis1993",
      twitter: "https://twitter.com/davsis1993"
    }
  },
  projects: [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, Node.js, and MongoDB. Features smooth animations, dark mode toggle, and dynamic content management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/davsis1993/portfolio",
      liveUrl: "https://davsis1993-portfolio.com"
    },
    {
      title: "E-commerce Platform",
      description: "An e-commerce platform with product listings, shopping cart functionality, secure checkout process, and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redux"],
      githubUrl: "https://github.com/davsis1993/ecommerce",
      liveUrl: "https://davsis1993-ecommerce.com"
    },
    {
      title: "Task Manager App",
      description: "A full-featured task management application with user authentication, real-time updates, drag-and-drop task organization, and collaborative features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      githubUrl: "https://github.com/davsis1993/taskmanager",
      liveUrl: "https://davsis1993-taskmanager.com"
    }
  ]
};

async function importData() {
  try {
    console.log('📊 Importing data to MongoDB Atlas...\n');
    
    // Connect to MongoDB Atlas
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`✅ Connected to MongoDB Atlas: ${conn.connection.host}`);
    
    // Import Hero data
    const Hero = require('./models/Hero');
    await Hero.deleteMany({});
    await Hero.create(sampleData.hero);
    console.log('✅ Hero data imported');
    
    // Import About data
    const About = require('./models/About');
    await About.deleteMany({});
    await About.create(sampleData.about);
    console.log('✅ About data imported');
    
    // Import Projects data
    const Project = require('./models/Project');
    await Project.deleteMany({});
    await Project.insertMany(sampleData.projects);
    console.log('✅ Projects data imported');
    
    console.log('\n🎉 All data imported successfully!');
    console.log('Database: portfolio');
    console.log('Collections: hero, about, projects');
    
    await mongoose.connection.close();
    console.log('✅ Connection closed');
    
  } catch (error) {
    console.error('❌ Import failed:', error.message);
  }
}

importData(); 