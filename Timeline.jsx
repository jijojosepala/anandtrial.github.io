import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineEvents = [
  {
    title: "First Meeting",
    description: "Two souls crossed paths, not knowing the beautiful journey ahead.",
  },
  {
    title: "Friendship",
    description: "Laughter, conversations, and a bond that grew stronger every day.",
  },
  {
    title: "Engagement",
    description: "A promise made, a ring exchanged, forever began.",
  },
  {
    title: "Wedding Journey",
    description: "Stepping into a lifetime of love and togetherness.",
  }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-beige to-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">Our Love Story</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gold -translate-x-1/2 origin-top drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
          />

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="mb-16 relative flex items-center justify-start md:justify-center w-full">
                {/* Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 shadow-[0_0_10px_rgba(212,175,55,0.8)] z-20"
                />

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`w-[calc(100%-60px)] md:w-5/12 ml-[60px] md:ml-0 glass-card p-6 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <h3 className="text-2xl font-heading text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 font-light">{event.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
