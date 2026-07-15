import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode }) { // استلام الـ Props مباشرة
  const [activeNav, setActiveNav] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 dark:bg-burgundy-dark/40 backdrop-blur-md border-b border-slate-200 dark:border-burgundy-light/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Terminal className="w-6 h-6 text-neon-pink group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono text-xl font-bold tracking-wider bg-gradient-to-r from-slate-800 dark:from-white to-neon-pink bg-clip-text text-transparent">
            &lt; Dev.Malak /&gt;
          </span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveNav(item.id)}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-300"
                animate={{
                  color: isActive ? '#FF2E93' : (isDarkMode ? '#E2E8F0' : '#334155'),
                }}
                whileHover={{ scale: 1.15, color: '#FF2E93' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-pink to-neon-gold shadow-[0_0_8px_#FF2E93]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}

          <div className="w-[1px] h-5 bg-slate-300 dark:bg-burgundy-light/40"></div>

          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full bg-burgundy-main/10 dark:bg-white/5 border border-burgundy-light/20 dark:border-white/10 text-burgundy-main dark:text-neon-gold hover:text-neon-pink dark:hover:text-neon-pink transition-colors cursor-pointer"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 animate-[spin_20s_linear_infinite]" />
            ) : (
              <Moon className="w-5 h-5 text-burgundy-main" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-burgundy-main dark:text-neon-gold p-1">
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-white hover:text-neon-pink">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white dark:bg-burgundy-dark/95 backdrop-blur-lg border-b border-burgundy-light/20 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => { setActiveNav(item.id); setIsOpen(false); }} className={`text-base font-medium transition-all ${activeNav === item.id ? 'text-neon-pink pl-2 font-bold' : 'text-slate-600 dark:text-slate-300'}`}>
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}