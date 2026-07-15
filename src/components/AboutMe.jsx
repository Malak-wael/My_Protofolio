import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, Code2, GraduationCap } from 'lucide-react';

export default function AboutMe() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section 
      id="about" 
      className="min-h-screen py-24 bg-[#FAF6F0] dark:bg-burgundy-dark text-slate-900 dark:text-white relative overflow-hidden flex items-center justify-center px-6 transition-colors duration-500"
    >
      
      {/* Background Aesthetic */}
      {/* <div className="absolute -left-10 top-10 text-slate-900/[0.02] dark:text-white/[0.02] select-none pointer-events-none font-mono text-9xl font-black">
        ABOUT
      </div> */}

      <div className="max-w-4xl w-full flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My <span className="text-neon-pink">Identity Box</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">Click the mystery box below to unbox my professional journey.</p>
        </div>

        {/* The Mystery Box Container */}
        <div className="w-full relative flex justify-center">
          
          <AnimatePresence mode="wait">
            {!isOpened ? (
              
              /* ================= BOX CLOSED ================= */
              <motion.div
                key="closed-box"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                onClick={() => setIsOpened(true)}
                className="w-full max-w-md bg-white/60 dark:bg-gradient-to-br dark:from-burgundy-main/40 dark:to-burgundy-dark border-2 border-dashed border-burgundy-light/30 dark:border-neon-pink/40 rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer relative group overflow-hidden shadow-sm dark:shadow-[0_0_40px_rgba(255,46,147,0.1)] hover:shadow-[0_0_50px_rgba(255,46,147,0.25)] hover:border-neon-pink transition-all duration-500 backdrop-blur-md"
              >
                <div className="absolute -inset-10 bg-neon-pink/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="p-5 rounded-2xl bg-burgundy-main/10 dark:bg-burgundy-main border border-burgundy-light/10 dark:border-white/10 text-neon-pink mb-6 group-hover:scale-110 transition-transform"
                >
                  <Sparkles className="w-10 h-10 animate-pulse" />
                </motion.div>

                <h3 className="text-2xl font-black tracking-widest font-mono text-slate-800 dark:text-white mb-2 uppercase group-hover:text-neon-pink transition-colors">
                  &lt;Know_Me /&gt;
                </h3>
                <p className="text-xs font-mono text-burgundy-light dark:text-neon-gold tracking-wide uppercase">
                  Click to Unbox Source Code
                </p>

                <div className="absolute bottom-4 text-slate-400 dark:text-slate-500 group-hover:text-neon-pink dark:group-hover:text-white transition-colors">
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </div>
              </motion.div>
            ) : (
              
              /* ================= BOX OPENED ================= */
              <motion.div
                key="opened-box"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="w-full bg-white/80 dark:bg-burgundy-main/20 border border-slate-200 dark:border-burgundy-light/40 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-xl dark:shadow-[0_0_60px_rgba(0,0,0,0.4)] relative"
              >
                <button 
                  onClick={() => setIsOpened(false)}
                  className="absolute top-4 right-6 font-mono text-xs text-neon-pink hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-widest bg-slate-200/60 dark:bg-burgundy-dark/50 px-3 py-1 rounded-full border border-slate-300 dark:border-white/5 cursor-pointer"
                >
                  [ Close Box ]
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                  
                  {/* Developer Bio */}
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-neon-pink">
                      <Code2 className="w-6 h-6" />
                      <h4 className="text-lg font-bold font-mono tracking-wide text-slate-800 dark:text-white">&lt;Malak Wael /&gt;</h4>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg font-sans">
                      I am a passionate Full-Stack Developer dedicated to building robust and highly efficient web applications. With a strong foundation in MVC architecture and clean coding principles, I find my joy in transforming complex problems into elegant, high-performance digital experiences.
                    </p>
                    <p className="text-burgundy-light dark:text-neon-gold/90 mt-4 leading-relaxed text-xs font-mono">
                      // Believer in continuous learning, SOLID design principles, and pixel-perfect execution.
                    </p>
                  </div>

                  {/* Education Card */}
                  <div className="bg-slate-50 dark:bg-burgundy-dark/60 border border-slate-200 dark:border-burgundy-light/20 rounded-2xl p-6 flex flex-col justify-between group hover:border-neon-gold/50 transition-colors duration-300">
                    <div>
                      <div className="flex items-center gap-3 mb-4 text-burgundy-main dark:text-neon-gold">
                        <GraduationCap className="w-6 h-6" />
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-neon-gold">Education</h4>
                      </div>
                      <h5 className="text-slate-900 dark:text-white font-bold text-sm tracking-wide">WE School for Applied Technology</h5>
                      <p className="text-xs text-neon-pink font-mono mt-1">Specialization: Web Development</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                        Gained rigorous practical and theoretical software engineering experience right from high school, focusing on production-ready modern web ecosystems.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-burgundy-light/20 flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span>LEVEL:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest">HIGH SCHOOL HERO</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 pt-6 border-t border-slate-200 dark:border-burgundy-light/20">
                    <div className="text-center p-3 rounded-xl bg-slate-100/70 dark:bg-burgundy-dark/30 border border-slate-200 dark:border-white/[0.02]">
                      <span className="block text-2xl font-black font-mono text-neon-pink">10+</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-1 block">Projects Built</span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-slate-100/70 dark:bg-burgundy-dark/30 border border-slate-200 dark:border-white/[0.02]">
                      <span className="block text-2xl font-black font-mono text-burgundy-main dark:text-neon-gold">500+</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-1 block">Git Commits</span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-slate-100/70 dark:bg-burgundy-dark/30 border border-slate-200 dark:border-white/[0.02]">
                      <span className="block text-2xl font-black font-mono text-slate-800 dark:text-white">100%</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-1 block">Clean Code</span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-slate-100/70 dark:bg-burgundy-dark/30 border border-slate-200 dark:border-white/[0.02]">
                      <span className="block text-xl font-black font-mono text-neon-pink">WE_Tech</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-1 block">Alumni/Student</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}