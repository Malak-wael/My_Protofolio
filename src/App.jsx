import React, { useState, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import OrbitSkills from './components/OrbitSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DotField from './components/DotField';
import profilePic from './assets/images/profilePic1.jpeg';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* 1. تأثير الـ Preloader العبقري أول ما الويب يفتح */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} isDarkMode={isDarkMode} />
        )}
      </AnimatePresence>
  
      {/* 2. الـ الويب الرئيسي يظهر فوراً أول ما التحميل يخلص */}
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-[#FAF6F0] dark:bg-burgundy-dark text-slate-900 dark:text-white overflow-x-hidden antialiased font-sans transition-colors duration-500 relative">
  
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  
          {/* ================= HERO SECTION (HOME) ================= */}
          <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
  
            {/* حاوية الـ DotField التفاعلية - تفرش بالكامل */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto overflow-hidden">
              <DotField
                dotRadius={2.3}
                dotSpacing={15}
                bulgeStrength={75}
                glowRadius={180}
                sparkle={true}
                waveAmplitude={0}
                gradientFrom={isDarkMode ? 'rgba(255, 46, 147, 0.60)' : 'rgba(141, 15, 62, 0.55)'}
                gradientTo={isDarkMode ? 'rgba(255, 215, 0, 0.35)' : 'rgba(255, 46, 147, 0.20)'}
                glowColor={isDarkMode ? 'rgba(255, 46, 147, 0.35)' : 'rgba(255, 255, 255, 0.9)'}
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            </div>
  
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-pink/5 blur-[150px] rounded-full pointer-events-none hidden dark:block"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-gold/5 blur-[130px] rounded-full pointer-events-none hidden dark:block"></div>
  
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-20 lg:pt-0 pointer-events-none select-none md:select-text">
  
              {/* ================= الجانب الأيسر: النصوص والأزرار ================= */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
  
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 pointer-events-auto"
                >
                  <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/50 dark:bg-burgundy-main/40 border border-slate-200 dark:border-neon-pink/30 text-neon-pink shadow-sm backdrop-blur-sm">
                    🚀 Full-Stack Developer
                  </span>
                  <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/50 dark:bg-burgundy-main/40 border border-slate-200 dark:border-neon-gold/30 text-burgundy-main dark:text-neon-gold shadow-sm backdrop-blur-sm">
                    🎓 WE School Student
                  </span>
                </motion.div>
  
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight w-full leading-[1.15] text-slate-900 dark:text-white font-sans"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide block mb-3 text-slate-500 dark:text-slate-400 font-mono">
                    Hi there, I am
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-purple-500 to-neon-gold font-black block text-5xl sm:text-6xl lg:text-8xl mb-4 py-1">
                    Malak Wael
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight block text-slate-800 dark:text-slate-200 mt-2">
                    Crafting Code With <br className="hidden lg:block" />
                    <span className="text-neon-pink">Modern Aesthetics</span>
                  </span>
                </motion.h1>
  
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-slate-600 dark:text-slate-400 mt-8 text-base sm:text-lg max-w-xl font-sans leading-relaxed"
                >
                  Leveraging my complete full-stack ecosystem to engineer robust backend logic, implement modern reactive interfaces, and build high-performance web applications from concept to deployment.
                </motion.p>
  
                {/* حاوية الأزرار الثلاثية (مشاريع - تحميل الـ CV - تواصل) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full pointer-events-auto"
                >
                  <a href="#projects" className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neon-pink text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(255,46,147,0.3)] hover:shadow-[0_0_35px_rgba(255,46,147,0.6)] transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer">
                    Explore Works &lt;/&gt;
                  </a>
  
                  <a
                    href="/Malak_Wael_CV.pdf" 
                    download="Malak_Wael_FullStack_CV.pdf" 
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/40 dark:bg-burgundy-main/20 text-burgundy-main dark:text-neon-gold border border-burgundy-light/30 dark:border-neon-gold/30 font-mono text-xs uppercase tracking-widest font-bold shadow-sm transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer backdrop-blur-sm hover:bg-neon-gold hover:text-slate-900 dark:hover:bg-neon-gold dark:hover:text-slate-900 hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download CV
                  </a>
  
                  <a href="#contact" className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 dark:bg-transparent text-slate-800 dark:text-white border border-slate-300 dark:border-burgundy-light/40 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer backdrop-blur-sm">
                    Get In Touch
                  </a>
                </motion.div>
  
              </div>
  
              {/* ================= الجانب الأيمن: الصورة العائمة المتكاملة ================= */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 flex justify-center lg:justify-end items-center w-full relative pointer-events-auto mt-10 lg:mt-0"
              >
                <motion.div 
                  animate={{ y: [-15, 15, -15] }} 
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-gold rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
  
                  {/* إطار الصورة الفخم الثابت (بدون دوران هندسي حاد) */}
                  <div className="absolute inset-0 p-[3px] rounded-full bg-gradient-to-br from-neon-pink via-burgundy-main to-neon-gold transition-all duration-500">
                    
                    <div className="w-full h-full rounded-full bg-slate-100 dark:bg-burgundy-dark overflow-hidden relative border-4 border-white dark:border-burgundy-dark shadow-2xl">
                      
                      <img 
                        src={profilePic} 
                        alt="Malak Wael - Full Stack Developer" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
                      />
                      
                      <div className="absolute inset-0 bg-burgundy-main/20 dark:bg-burgundy-dark/30 group-hover:opacity-0 transition-opacity duration-500"></div>
                    </div>
                  </div>
  
                </motion.div>
              </motion.div>
  
            </div>
          </section>
          {/* ========================================================================= */}
  
          <AboutMe />
          <OrbitSkills />
          <Projects />
          <Contact />
  
        </div>
      </div>
    </>
  );
}