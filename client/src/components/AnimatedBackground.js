import React, { useEffect, useRef } from 'react';
import MorphingShapes from './MorphingShapes';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        // Get theme-aware colors
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
        const accentPurple = getComputedStyle(document.documentElement).getPropertyValue('--accent-purple').trim();
        this.color = Math.random() > 0.5 ? accentColor : accentPurple;
      }

      update(scrollSpeed = 1) {
        this.x += this.vx * scrollSpeed;
        this.y += this.vy * scrollSpeed;
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Grid lines
    const drawGrid = (scrollSpeed = 1) => {
      const gridSize = 50;
      const offset = (Date.now() * 0.001 * scrollSpeed) % gridSize;
      
      // Get theme-aware accent color
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
      ctx.strokeStyle = accentColor;
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Animation loop
    let lastScrollY = 0;
    let scrollSpeed = 1;

    const animate = () => {
      // Clear canvas with theme-aware background
      const primaryBg = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg').trim();
      ctx.fillStyle = primaryBg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get scroll speed
      const currentScrollY = window.scrollY;
      scrollSpeed = Math.abs(currentScrollY - lastScrollY) * 0.01 + 1;
      lastScrollY = currentScrollY;

      // Draw grid
      drawGrid(scrollSpeed);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(scrollSpeed);
        particle.draw();
      });

      // Draw connections
      // Get theme-aware accent color
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
      ctx.strokeStyle = accentColor;
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      <MorphingShapes />
    </>
  );
};

export default AnimatedBackground; 