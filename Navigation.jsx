import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = ['hero', 'couple', 'details', 'timeline', 'gallery', 'rsvp'];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;
          
          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
      {sections.map((section) => (
        <motion.button
          key={section}
          onClick={() => scrollTo(section)}
          className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${activeSection === section ? 'bg-gold scale-125 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-gold/30 hover:bg-gold/60'}`}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gold px-2 py-1 rounded text-xs font-heading uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {section}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default Navigation;
