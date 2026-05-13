import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-ivory">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[800px] h-[800px] bg-champagne/20 rounded-full blur-[100px] mix-blend-multiply" />
      </motion.div>

      <motion.div 
        style={{ y }}
        className="z-10 text-center px-4 max-w-4xl"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-8 font-heading"
        >
          Together With Their Families
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-gray-900 mb-6 text-glow"
        >
          <span className="block mb-2">Nissin Mary Binu</span>
          <span className="block text-3xl md:text-5xl my-4 text-gold italic font-body">&</span>
          <span className="block">Anand David</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl text-gray-700 tracking-widest mt-8 font-light"
        >
          Monday, 13 July 2026
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold/70" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
