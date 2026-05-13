import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Venue = () => {
  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">The Venue</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center text-center p-8 lg:p-12"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-3xl font-heading text-gray-900 mb-4">St. Mary's Orthodox Syrian Church</h3>
            <p className="text-gray-600 font-light mb-8 max-w-sm">
              Join us at this beautiful and holy place to celebrate our union.
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 tracking-widest text-sm uppercase transition-colors duration-300"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] lg:h-auto rounded-2xl overflow-hidden relative shadow-inner"
          >
            {/* Embedded Google Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.09!2d76.1!3d10.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM2JzAwLjAiTiA3NsKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
