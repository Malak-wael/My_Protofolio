import React from 'react';
import { motion } from 'framer-motion';
import MagicoShop from "../assets/images/MagicoShope.png";
import SkyCast from "../assets/images/SkyCast.png";
import PureShop from "../assets/images/PureShop.png";
import QuizMaster from "../assets/images/QuizMaster.png";
import ELhoot_Motors from "../assets/images/ELhoot_Motors.png";

const projectsData = [
  {
    id: 1,
    title: "PureShop",
    desc: "Built from scratch using raw PHP and PDO architecture, PureShop is a high-performance e-commerce platform prioritizing ironclad security and modern user experiences. It packs advanced features like smart Voice Search and a responsive, ultra-modern frosted-glass UI that looks amazing on any screen.",
    tags: ["PHP (OOP)", "MySQL", " PDO", "Glassmorphism", "JavaScript (Voice API)", "Responsive UI ", " CyberSecurity"],
    image: PureShop,
    github: "https://github.com/Malak-wael/-FullStack-E-Commerce-PureShop-.git",
    live: "http://pureshop.rf.gd"
  }
  ,

  {
    id: 2,
    title: "Magico — Dynamic E-Commerce",
    desc: "A fully responsive and interactive E-Commerce web application built using React and bundled with Vite for optimized performance. The project features a seamless user experience, mimicking real-world shopping platforms with dynamic product rendering, advanced filtering, and a fully functional shopping cart system, all powered by a mock API for seamless data fetching.",
    tags: ["React.js ", " Vite ", "JavaScript ", " CSS3 ", " Fetch API / Axios"],
    image: MagicoShop,
    github: "https://github.com/Malak-wael/Magico_e-commerce-web.git",
    live: "https://magico-e-commerce.vercel.app/"
  },
  {
    id: 3,
    title: "SkyCast Weather Application",
    desc: "A lightweight, responsive weather application developed collaboratively during the NASA Space Apps Challenge. The app fetches and displays live meteorological data from global weather APIs. Built using core web technologies and Bootstrap, it focuses on delivering a fast, clean, and user-friendly dashboard to track global weather conditions under tight hackathon deadlines.",
    tags: ["HTML5 ", "CSS3 ", "JavaScript (ES6+)", "Bootstrap", "REST API", "Git & GitHub"],
    image: SkyCast,
    github: "https://github.com/Malak-wael/SkyCast_wether-app.git",
    live: "https://malak-wael.github.io/SkyCast_wether-app/"
  }
  ,

  {
    id: 4,
    title: "Quiz Master",
    desc: "A powerful, full-stack quiz management platform designed for creating and taking interactive tests. It features a modern, responsive UI with smooth animations, dynamic dashboards for user statistics, and a highly secure backend with encrypted authentication to protect data and user sessions.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT", "Bcrypt", "Railway (Backend)", "Vercel (Frontend)", " Git"],
    image: QuizMaster,
    github: "https://github.com/Malak-wael/QuizMaster.git",
    live: "https://quiz-master-ii6f.vercel.app/"
  }, {
    id: 5,
    title: "El-Hoot Motors",
    desc: "A highly responsive and interactive automotive showcase platform designed for a premier motorcycle and vehicle dealership. Crafted with semantic structure, smooth custom CSS animations, and vanilla JavaScript for dynamic vehicle sorting and immersive product galleries.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: ELhoot_Motors,
    github: "https://github.com/Malak-wael/EL-hootMoter-FrontEnd-Project-.git",
    live: "https://malak-wael.github.io/EL-hootMoter-FrontEnd-Project-/"
  },
  {
    id: 6, 
    name: "MediCore / Hospital Management System",
    desc: "Collaborative enterprise ecosystem engineered for live patient routing, real-time staff scheduling, and secure medical records warehousing.",
    tech: ["Laravel", "React", "MySQL", "Tailwind"],
    isComingSoon: true 
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 bg-[#FAF6F0] dark:bg-burgundy-dark text-slate-900 dark:text-white relative overflow-hidden px-6 transition-colors duration-500"
    >

      {/* Background Cinematic Text */}
      {/* <div className="absolute right-5 top-1/4 select-none pointer-events-none opacity-[0.01] dark:opacity-[0.01] text-slate-900 dark:text-white font-mono text-[12rem] font-black tracking-tighter">
        PORTFOLIO
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-neon-pink">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">Visual preview of web applications demonstrating scalable architecture.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => {

            if (project.isComingSoon) {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                    rotateX: 2,
                    rotateY: -2,
                    boxShadow: "0 30px 60px rgba(255, 215, 0, 0.08)"
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 22 }}
                  className="border-2 border-dashed border-slate-300 dark:border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm flex flex-col group relative h-[460px] bg-white/30 dark:bg-burgundy-main/5 select-none"
                >
                  <div className="h-[200px] w-full flex items-center justify-center relative border-b border-dashed border-slate-300 dark:border-white/10 bg-slate-100/50 dark:bg-burgundy-dark/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-burgundy-dark/30 via-transparent to-transparent opacity-60" />
                    <span className="text-5xl opacity-4xl filter grayscale group-hover:scale-110 transition-transform duration-500">🛠️</span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow relative">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold tracking-wide text-slate-400 dark:text-white/45 font-sans">
                          {project.title}
                        </h3>

                        <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-neon-gold/10 border border-neon-gold/30 text-neon-gold font-bold shadow-sm animate-pulse">
                          In Progress
                        </span>
                      </div>

                      <p className="text-slate-400 dark:text-slate-500 text-xs md:text-sm leading-relaxed font-sans line-clamp-4 mt-2">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tags Section */}
                    <div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-slate-200 dark:border-white/10 opacity-50">
                        {project.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono tracking-wider px-2 py-1 rounded-md bg-slate-100 dark:bg-burgundy-dark text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-burgundy-light/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="w-full py-3 rounded-xl bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/5 text-center font-mono text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mt-5 flex items-center justify-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        Decoding Soon...
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: -2,
                  boxShadow: "0 30px 60px rgba(255, 46, 147, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="bg-white/70 dark:bg-burgundy-main/15 border border-slate-200 dark:border-burgundy-light/20 rounded-3xl overflow-hidden backdrop-blur-md flex flex-col group relative h-[460px] shadow-xl dark:shadow-2xl"
              >

                {/* Project Image Wrapper */}
                <div className="h-[200px] w-full overflow-hidden relative border-b border-slate-200 dark:border-burgundy-light/20 bg-slate-100 dark:bg-burgundy-dark/40">
                  <div
                    className="w-full h-full bg-cover bg-top transition-all duration-[2.5s] ease-in-out group-hover:bg-bottom"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-burgundy-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow relative bg-gradient-to-b from-transparent to-slate-50/50 dark:to-burgundy-dark/50">

                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-pink/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold tracking-wide text-slate-800 dark:text-white group-hover:text-neon-pink transition-colors duration-300 font-sans">
                        {project.title}
                      </h3>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" title="View Source Code">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                        <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-neon-pink transition-colors" title="Live Demo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans line-clamp-3 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags Section */}
                  <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-burgundy-light/10">
                    {project.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono tracking-wider px-2 py-1 rounded-md bg-slate-100 dark:bg-burgundy-dark text-burgundy-main dark:text-neon-gold border border-slate-200 dark:border-burgundy-light/20 shadow-inner group-hover:border-neon-pink/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}