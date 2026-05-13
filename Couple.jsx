import React from 'react';
import { motion } from 'framer-motion';

const Couple = () => {
  return (
    <section className="relative w-full min-h-screen py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-gray-900 mb-4">The Bride & Groom</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Bride Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">Nissin Mary Binu</h3>
              <div className="space-y-4 text-gray-600 font-light">
                <p className="text-sm uppercase tracking-widest text-gold">Daughter Of</p>
                <p>Mrs. Leena Binu & Mr. Binu P Abraham</p>
                <div className="pt-4 mt-4 border-t border-gray-200/50">
                  <p className="text-sm">Pulikkottil House</p>
                  <p className="text-sm">St. Grigorious Road</p>
                  <p className="text-sm">Pazhanji, Thrissur</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Groom Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">Anand David</h3>
              <div className="space-y-4 text-gray-600 font-light">
                <p className="text-sm uppercase tracking-widest text-gold">Son Of</p>
                <p>Mrs. Anitha David & Mr. David Vincent</p>
                <div className="pt-4 mt-4 border-t border-gray-200/50">
                  <p className="text-sm">Puthoor House</p>
                  <p className="text-sm">Kurumala, Chelakkara</p>
                  <p className="text-sm">Thrissur</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
