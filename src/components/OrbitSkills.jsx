import React, { useState } from 'react';
import { skills } from '../data/skillsData';

const softSkills = [
  { name: "Problem Solving", desc: "Analyzing complex bugs and engineering efficient logic." },
  { name: "Teamwork", desc: "Collaborating seamlessly with developers and designers." },
  { name: "Adaptability", desc: "Thriving in fast-paced environments and learning new tech fast." },
  { name: "Clean Communicator", desc: "Explaining technical concepts clearly and effectively." }
];

export default function OrbitSkills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="min-h-screen py-24 bg-[#FAF6F0] dark:bg-burgundy-dark text-slate-900 dark:text-white transition-colors duration-500 px-6 relative overflow-hidden">
      
      {/* Background Large Text */}
      {/* <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] dark:opacity-5">
        <h2 className="text-8xl md:text-9xl font-black font-mono tracking-widest text-burgundy-main dark:text-white">EXPERTISE</h2>
      </div> */}

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-neon-pink">Skills Orbit</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">Hover over any technology to read its name inside the core.</p>
        </div>

        {/* Orbit Arena */}
        <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] flex items-center justify-center mb-24">
          
          {/* CENTER CORE */}
          <div 
            className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center text-center px-4 z-20 transition-all duration-500 bg-white dark:bg-burgundy-main shadow-xl border"
            style={{
              borderColor: hoveredSkill ? hoveredSkill.color : 'rgba(255, 46, 147, 0.4)',
              boxShadow: hoveredSkill ? `0 0 30px ${hoveredSkill.color}30` : 'none'
            }}
          >
            <span 
              className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
              style={{ color: hoveredSkill ? hoveredSkill.color : '#FF2E93' }}
            >
              {hoveredSkill ? 'Active Tech' : 'Tech Stack'}
            </span>
            
            <div className="w-6 h-[1px] bg-slate-300 dark:bg-burgundy-light/40 mb-2"></div>
            
            <div className="h-10 flex items-center justify-center">
              <span 
                key={hoveredSkill ? hoveredSkill.id : 'default'} 
                className="font-sans text-xs md:text-sm font-black tracking-wider transition-all duration-300 text-slate-800 dark:text-white"
                style={{ color: hoveredSkill ? hoveredSkill.color : undefined }}
              >
                {hoveredSkill ? hoveredSkill.name : 'Hover an Icon'}
              </span>
            </div>
          </div>

          <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-slate-300 dark:border-burgundy-light/30 pointer-events-none z-0"></div>

          <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] animate-[spin_40s_linear_infinite] hover:[animation-play-state:paused] flex items-center justify-center z-10">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const angle = (index * 360) / skills.length;
              
              return (
                <div
                  key={skill.id}
                  className="absolute w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                  style={{
                    top: `${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 50 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full bg-slate-100 dark:bg-burgundy-main border border-slate-300/60 dark:border-white/10 flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:scale-125 hover:border-neon-pink group animate-[spin_40s_linear_infinite] [animation-direction:reverse] hover:[animation-play-state:paused]"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <IconComponent 
                      className="w-5 h-5 md:w-7 md:h-7 transition-colors duration-300 text-slate-600 dark:text-slate-300 group-hover:text-[var(--skill-color)]"
                      style={{ '--skill-color': skill.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills Cards */}
        <div className="w-full max-w-5xl z-10">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-xl font-bold tracking-wider uppercase text-neon-gold">Human Core (Soft Skills)</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">The interpersonal values driving my engineering process.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {softSkills.map((soft, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-burgundy-main/30 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-neon-gold group-hover:w-full transition-all duration-300"></div>
                <span className="absolute -right-2 -bottom-2 text-6xl font-black font-mono text-slate-100 dark:text-white/[0.02] group-hover:text-neon-gold/5 dark:group-hover:text-neon-gold/5 transition-colors select-none">
                  0{index + 1}
                </span>
                <h4 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-2 tracking-wide">
                  {soft.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {soft.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}