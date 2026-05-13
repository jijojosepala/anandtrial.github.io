import React from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-beige/20 via-white to-white pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">RSVP</h2>
          <p className="text-gray-500 font-light tracking-wider uppercase text-sm mb-4">Kindly respond by 1st June 2026</p>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card bg-white/70 p-8 md:p-12 shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-gray-600 font-medium">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-gold transition-colors text-gray-900 font-light"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-gray-600 font-medium">Number of Guests</label>
                <select className="w-full bg-transparent border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-gold transition-colors text-gray-900 font-light appearance-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-gray-600 font-medium">Attending</label>
                <select className="w-full bg-transparent border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-gold transition-colors text-gray-900 font-light appearance-none">
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-gray-600 font-medium">Message for the Couple</label>
              <textarea 
                rows="3"
                className="w-full bg-transparent border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-gold transition-colors text-gray-900 font-light resize-none"
                placeholder="Share your wishes..."
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold text-white font-heading tracking-widest uppercase py-4 rounded-none shadow-[0_4px_14px_0_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:bg-[#b8952b] transition-all duration-300"
            >
              Send RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
