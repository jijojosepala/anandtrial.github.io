import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-13T10:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card flex flex-col items-center justify-center p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <span className="text-4xl md:text-6xl font-heading text-gold mb-2 tabular-nums tracking-tighter text-glow">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base font-light tracking-widest uppercase text-gray-500">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
