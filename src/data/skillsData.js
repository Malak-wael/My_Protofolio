// // src/data/skillsData.js
// import { Atom, Code2, Database, Layout, Server, Cpu } from 'lucide-react';

// export const skills = [
//   { id: 1, name: 'React', icon: Atom, color: '#61DAFB' },
//   { id: 2, name: 'Laravel', icon: Cpu, color: '#FF2D20' },
//   { id: 3, name: 'PHP', icon: Server, color: '#777BB4' },
//   { id: 4, name: 'MySQL', icon: Database, color: '#4479A1' },
//   { id: 5, name: 'Tailwind CSS', icon: Layout, color: '#38BDF8' },
//   { id: 6, name: 'JavaScript', icon: Code2, color: '#F7DF1E' },
// ];
// src/data/skillsData.js
import { 
    Atom, 
    Cpu, 
    Server, 
    Database, 
    Layout, 
    Code2, 
    FileCode, 
    FileJson, 
    Braces 
  } from 'lucide-react';
  
  export const skills = [
    { id: 1, name: 'React', icon: Atom, color: '#61DAFB' },
    { id: 2, name: 'Laravel', icon: Cpu, color: '#FF2D20' },
    { id: 3, name: 'PHP', icon: Server, color: '#777BB4' },
    { id: 4, name: 'MySQL', icon: Database, color: '#4479A1' },
    { id: 5, name: 'Tailwind CSS', icon: Layout, color: '#38BDF8' },
    { id: 6, name: 'JavaScript', icon: Code2, color: '#F7DF1E' },
    // التقنيات الجديدة اللي طلبتيها:
    { id: 7, name: 'Node.js', icon: FileJson, color: '#339933' },
    { id: 8, name: 'Express.js', icon: Braces, color: '#0F172A' }, 
    { id: 9, name: 'Python', icon: Code2, color: '#3776AB' },
    { id: 10, name: 'HTML5', icon: FileCode, color: '#E34F26' },
    { id: 11, name: 'CSS3', icon: Layout, color: '#1572B6' },
  ];