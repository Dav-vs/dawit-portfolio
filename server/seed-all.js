const mongoose = require('mongoose');
const Project = require('./models/Project');
const Hero = require('./models/Hero');
const About = require('./models/About');
require('dotenv').config();

// Sample projects data
const sampleProjects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with the MERN stack, featuring smooth animations, dark mode toggle, and a comprehensive admin panel for content management. Includes dynamic content editing, project CRUD operations, and contact message management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com"
  },
  {
    title: "Task Manager App",
    description: "A full-featured task management application with user authentication, real-time updates, drag-and-drop task organization, and collaborative features. Includes project boards, task assignments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://tasks.yourdomain.com"
  },
  {
    title: "E-commerce Store",
    description: "An e-commerce platform with product listings, shopping cart functionality, secure checkout process, and admin dashboard for inventory management. Features payment integration, order tracking, and user reviews.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-store",
    liveUrl: "https://shop.yourdomain.com"
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features 7-day forecasts, hourly predictions, and weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather.yourdomain.com"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with analytics, content scheduling, and multi-platform posting capabilities. Includes engagement metrics, audience insights, and automated posting.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Twitter API", "Instagram API"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social.yourdomain.com"
  }
];

// Default Hero data
const defaultHero = {
  name: "Dawit Sisay",
  summary: "Full-stack developer passionate about creating innovative web solutions with modern technologies."
};

// Default About data
const defaultAbout = {
  jobTitle: "Full Stack Developer",
  bio: "I'm a passionate full-stack developer with expertise in modern web technologies. I love building scalable applications that solve real-world problems and provide exceptional user experiences. With a strong foundation in both frontend and backend development, I create seamless, responsive web applications that make a difference.",
  skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Socket.io", "Stripe API"],
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "john.doe@example.com"
  }
};

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
const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...\n');

    // Clear existing data
    await Project.deleteMany({});
    await Hero.deleteMany({});
    await About.deleteMany({});
    console.log('✓ Cleared existing data');

    // Insert Hero data
    const hero = await Hero.create(defaultHero);
    console.log(`✓ Created Hero section: ${hero.name}`);

    // Insert About data
    const about = await About.create(defaultAbout);
    console.log(`✓ Created About section: ${about.jobTitle}`);

    // Insert Projects
    const projects = await Project.insertMany(sampleProjects);
    console.log(`✓ Created ${projects.length} projects:`);
    
    projects.forEach((project, index) => {
      console.log(`  ${index + 1}. ${project.title}`);
    });

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nYou can now:');
    console.log('1. Start the server: npm run server');
    console.log('2. Start the client: npm start');
    console.log('3. Visit http://localhost:3000 to see your portfolio');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
const runSeed = async () => {
  await connectDB();
  await seedDatabase();
};

runSeed(); 