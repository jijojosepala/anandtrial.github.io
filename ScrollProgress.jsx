import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-50 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
