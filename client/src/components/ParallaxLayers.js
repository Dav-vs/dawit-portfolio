import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxLayers = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax transforms for different layers
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -200]);
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -400]);
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -600]);
  const layer4Y = useTransform(scrollY, [0, 1000], [0, -800]);

  // Mouse-based transforms for interactive effect
  const mouseX = useTransform(scrollY, [0, 1000], [0, mousePosition.x * 0.1]);
  const mouseY = useTransform(scrollY, [0, 1000], [0, mousePosition.y * 0.1]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Background Grid Layer */}
      <motion.div
        style={{ y: layer1Y }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
        }} />
      </motion.div>

      {/* Floating Geometric Shapes Layer */}
      <motion.div
        style={{ y: layer2Y, x: mouseX }}
        className="absolute inset-0"
      >
        {/* Hexagon */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-16 h-16 border-2 border-accent-color/30 opacity-40"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        />

        {/* Triangle */}
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-32 w-12 h-12 border-2 border-accent-purple/30 opacity-40"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />

        {/* Circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-accent-color/20 rounded-full"
        />
      </motion.div>

      {/* Code Particles Layer */}
      <motion.div
        style={{ y: layer3Y }}
        className="absolute inset-0"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [100, -100],
              x: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className="absolute text-accent-color/30 text-xs font-mono"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
            }}
          >
            {['const', 'let', 'function', 'return', 'import', 'export', 'useState', 'useEffect'][i]}
          </motion.div>
        ))}
      </motion.div>

      {/* Glow Orbs Layer */}
      <motion.div
        style={{ y: layer4Y }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-accent-color/10 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-accent-purple/10 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-color/5 rounded-full blur-2xl"
        />
      </motion.div>

      {/* Interactive Connection Lines */}
      <motion.div
        style={{ y: layer2Y }}
        className="absolute inset-0"
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <motion.path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M 200 300 Q 400 200 600 300 T 1000 300"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="var(--accent-purple)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--accent-color)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Depth Fog Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-bg/20 to-primary-bg/40 pointer-events-none" />
    </div>
  );
};

export default ParallaxLayers; 