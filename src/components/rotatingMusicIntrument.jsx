import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

const RotatingMusicInstrument = () => {
  return (
    <motion.div
      className="w-60 h-60 sm:w-80 sm:h-80 mx-auto relative perspective-1000 bg-slate-900"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-60 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Icon with 3D Effect */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 6, // Faster rotation
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Music
          size={140} // Smaller icon on mobile
          className="text-white sm:text-opacity-90"
          style={{
            filter: "drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.5))",
            transform: "translateZ(50px)",
          }}
        />
      </motion.div>

      {/* Rotating Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-[4px] border-gradient-to-br from-white/30 to-transparent"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8, // Slightly faster
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>
    </motion.div>
  );
};

export default RotatingMusicInstrument;
