import React from 'react';
import { motion } from 'framer-motion';

const MorphingShapes = () => {
  const shapes = [
    {
      id: 1,
      shape: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      color: 'accent-color',
      size: 'w-16 h-16',
      position: 'top-20 left-20',
      animation: {
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      },
      duration: 20,
    },
    {
      id: 2,
      shape: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      color: 'accent-purple',
      size: 'w-12 h-12',
      position: 'top-40 right-32',
      animation: {
        rotate: [360, 0],
        y: [0, -30, 0],
        scale: [1, 1.3, 1],
      },
      duration: 15,
    },
    {
      id: 3,
      shape: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      color: 'accent-color',
      size: 'w-20 h-20',
      position: 'bottom-32 left-1/4',
      animation: {
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.5, 0.2],
      },
      duration: 18,
    },
    {
      id: 4,
      shape: 'polygon(0% 0%, 100% 0%, 50% 100%)',
      color: 'accent-purple',
      size: 'w-14 h-14',
      position: 'bottom-20 right-1/3',
      animation: {
        rotate: [0, -360],
        x: [0, 20, 0],
        scale: [1, 1.4, 1],
      },
      duration: 12,
    },
    {
      id: 5,
      shape: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
      color: 'accent-color',
      size: 'w-18 h-18',
      position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      animation: {
        rotate: [0, 360],
        scale: [1, 1.5, 1],
        opacity: [0.1, 0.4, 0.1],
      },
      duration: 25,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.position} ${shape.size} border-2 border-${shape.color}/30 opacity-40`}
          style={{
            clipPath: shape.shape,
            transformStyle: 'preserve-3d',
          }}
          animate={shape.animation}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating 3D Cubes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-8 h-8"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(45deg) rotateY(45deg)',
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Cube faces */}
        <div className="absolute w-8 h-8 bg-accent-color/20 border border-accent-color/30" style={{ transform: 'translateZ(4px)' }} />
        <div className="absolute w-8 h-8 bg-accent-color/20 border border-accent-color/30" style={{ transform: 'rotateY(90deg) translateZ(4px)' }} />
        <div className="absolute w-8 h-8 bg-accent-color/20 border border-accent-color/30" style={{ transform: 'rotateY(-90deg) translateZ(4px)' }} />
        <div className="absolute w-8 h-8 bg-accent-color/20 border border-accent-color/30" style={{ transform: 'rotateX(90deg) translateZ(4px)' }} />
        <div className="absolute w-8 h-8 bg-accent-color/20 border border-accent-color/30" style={{ transform: 'rotateX(-90deg) translateZ(4px)' }} />
        <div className="absolute w-8 h-8 bg-accent-color/20 border border-accent-color/30" style={{ transform: 'rotateY(180deg) translateZ(4px)' }} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-6 h-6"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(30deg) rotateY(60deg)',
        }}
        animate={{
          rotateX: [0, -360],
          rotateY: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Cube faces */}
        <div className="absolute w-6 h-6 bg-accent-purple/20 border border-accent-purple/30" style={{ transform: 'translateZ(3px)' }} />
        <div className="absolute w-6 h-6 bg-accent-purple/20 border border-accent-purple/30" style={{ transform: 'rotateY(90deg) translateZ(3px)' }} />
        <div className="absolute w-6 h-6 bg-accent-purple/20 border border-accent-purple/30" style={{ transform: 'rotateY(-90deg) translateZ(3px)' }} />
        <div className="absolute w-6 h-6 bg-accent-purple/20 border border-accent-purple/30" style={{ transform: 'rotateX(90deg) translateZ(3px)' }} />
        <div className="absolute w-6 h-6 bg-accent-purple/20 border border-accent-purple/30" style={{ transform: 'rotateX(-90deg) translateZ(3px)' }} />
        <div className="absolute w-6 h-6 bg-accent-purple/20 border border-accent-purple/30" style={{ transform: 'rotateY(180deg) translateZ(3px)' }} />
      </motion.div>

      {/* Morphing Blob */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-color/10 to-accent-purple/10 rounded-full blur-sm"
        animate={{
          borderRadius: [
            '50% 50% 50% 50% / 50% 50% 50% 50%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '50% 50% 50% 50% / 50% 50% 50% 50%',
          ],
          scale: [1, 1.2, 0.8, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DNA Helix Effect */}
      <div className="absolute top-0 right-0 w-32 h-full opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-color rounded-full"
            style={{
              left: `${50 + Math.sin(i * 0.5) * 20}%`,
              top: `${i * 5}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MorphingShapes; 