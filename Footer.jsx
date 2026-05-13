import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className="relative h-[80vh] bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
      {/* Background glow and subtle cross */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[2px] h-[300px] bg-gold blur-[2px]" />
        <div className="w-[200px] h-[2px] bg-gold blur-[2px] absolute top-[40%]" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="text-center z-10 px-4"
      >
        <h2 className="text-4xl md:text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-gold via-champagne to-gold mb-6 tracking-wide">
          With Love, Prayers & Blessings
        </h2>
        
        <p className="text-gray-400 font-light text-lg tracking-widest uppercase mb-12">
          Nissin & Anand
        </p>
        
        <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
      </motion.div>
    </section>
  );
};

export default Footer;
