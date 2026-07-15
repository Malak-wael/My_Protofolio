import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete, isDarkMode }) {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.6 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF6F0] dark:bg-burgundy-dark transition-colors duration-500"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      
      <motion.svg width="120" height="120" viewBox="0 0 100 100" className="mb-6">
        <motion.path
          d="M 20 80 L 20 25 L 50 65 L 80 25 L 80 80"
          fill="transparent"
          strokeWidth="7"
          stroke="#FF2E93" 
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </motion.svg>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex gap-1.5 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-wide"
      >
        {"Malak Wael".split("").map((letter, i) => (
          <motion.span 
            key={i} 
            variants={item}
            className={letter === " " ? "w-3" : ""} 
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <div className="w-32 h-[2px] bg-slate-200 dark:bg-white/10 rounded-full mt-6 overflow-hidden">
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-neon-pink to-neon-gold relative"
        />
      </div>

    </motion.div>
  );
}