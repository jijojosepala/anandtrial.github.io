import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80",
];

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="py-32 bg-ivory overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-beige/30 to-transparent pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">Captured Moments</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto" />
      </div>

      <div className="relative h-[400px] md:h-[500px] flex items-center">
        <motion.div style={{ x }} className="flex gap-8 px-4 absolute left-0 w-[200vw]">
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="relative w-[300px] md:w-[450px] h-[350px] md:h-[450px] shrink-0 rounded-2xl overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt="Gallery moment" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
