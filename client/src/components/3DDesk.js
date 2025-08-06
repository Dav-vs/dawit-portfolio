import React from 'react';
import { motion } from 'framer-motion';

const Desk3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 3D Desk Scene */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 perspective-1000">
        {/* Desk Surface */}
        <motion.div
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ 
            rotateX: [0, 5, 0],
            rotateY: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(60deg) rotateY(-15deg)',
          }}
        >
          {/* Desk Legs */}
          <div className="absolute -bottom-8 left-4 w-2 h-8 bg-gray-700 rounded"></div>
          <div className="absolute -bottom-8 right-4 w-2 h-8 bg-gray-700 rounded"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gray-700 rounded"></div>
        </motion.div>

        {/* Laptop Base */}
        <motion.div
          initial={{ rotateX: 0, rotateY: 0, z: 0 }}
          animate={{ 
            rotateX: [0, 2, 0],
            rotateY: [0, -5, 0],
            z: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-xl"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(65deg) rotateY(-15deg) translateZ(20px)',
          }}
        >
          {/* Laptop Screen */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: [0, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-br from-blue-900 to-blue-800 rounded-t-lg shadow-lg"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(-110deg) rotateY(-15deg) translateZ(10px)',
              transformOrigin: 'bottom center'
            }}
          >
            {/* Screen Content */}
            <div className="absolute inset-2 bg-black rounded-sm">
              <div className="absolute top-2 left-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute top-2 left-6 w-16 h-1 bg-gray-600 rounded"></div>
              <div className="absolute top-6 left-2 w-12 h-1 bg-blue-500 rounded"></div>
              <div className="absolute top-8 left-2 w-8 h-1 bg-purple-500 rounded"></div>
            </div>
          </motion.div>

          {/* Keyboard */}
          <div className="absolute inset-2 bg-gray-800 rounded-sm">
            <div className="grid grid-cols-12 gap-1 p-2">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-gray-700 rounded-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coffee Cup */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-16 right-1/4 w-6 h-8 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full shadow-lg"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(65deg) rotateY(-15deg) translateZ(15px)',
          }}
        >
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-orange-200 rounded-full"></div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: [0, 5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-12 left-1/4 w-4 h-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(65deg) rotateY(-15deg) translateZ(12px)',
          }}
        >
          <div className="absolute inset-1 bg-black rounded-sm">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Floating Code Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/4 text-accent-color text-xs font-mono opacity-30"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(65deg) rotateY(-15deg) translateZ(50px)',
          }}
        >
          &lt;code&gt;
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-1/4 text-accent-purple text-xs font-mono opacity-30"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(65deg) rotateY(-15deg) translateZ(40px)',
          }}
        >
          {`{...props}`}
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-16 left-1/2 text-accent-color text-xs font-mono opacity-30"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(65deg) rotateY(-15deg) translateZ(45px)',
          }}
        >
          const dev = true;
        </motion.div>
      </div>

      {/* Ambient Lighting */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-accent-color/10 to-transparent rounded-full blur-xl"></div>
    </div>
  );
};

export default Desk3D; 