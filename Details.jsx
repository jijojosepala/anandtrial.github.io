import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Details = () => {
  return (
    <section className="relative py-24 bg-beige overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="floral" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#floral)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-3xl shadow-2xl border border-white/50 text-center relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <span className="text-white text-2xl font-heading">I</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-8 mt-4">Wedding Ceremony</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-12">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-gold mb-4" />
              <p className="text-xl font-heading text-gray-800">Monday</p>
              <p className="text-2xl font-light text-gray-600 mt-2">13 July 2026</p>
            </div>
            
            <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-gold mb-4" />
              <p className="text-xl font-heading text-gray-800">Morning</p>
              <p className="text-2xl font-light text-gray-600 mt-2">10:00 AM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
