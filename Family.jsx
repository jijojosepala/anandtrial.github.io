import React from 'react';
import { motion } from 'framer-motion';

const Family = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">Family Blessings</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bride Family */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-ivory/30"
          >
            <h3 className="text-2xl font-heading text-gold mb-6 uppercase tracking-wider">Bride's Family</h3>
            <div className="space-y-4 font-light text-gray-700">
              <p>Mrs. Leena Binu & Mr. Binu P Abraham</p>
              <div className="w-12 h-[1px] bg-gray-300 mx-auto my-4" />
              <p className="text-sm">Grandparents</p>
              <p>Mrs. & Mr. ...</p>
              {/* Add more family details as needed */}
            </div>
          </motion.div>

          {/* Groom Family */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-ivory/30"
          >
            <h3 className="text-2xl font-heading text-gold mb-6 uppercase tracking-wider">Groom's Family</h3>
            <div className="space-y-4 font-light text-gray-700">
              <p>Mrs. Anitha David & Mr. David Vincent</p>
              <div className="w-12 h-[1px] bg-gray-300 mx-auto my-4" />
              <p className="text-sm">Grandparents</p>
              <p>Mrs. & Mr. ...</p>
              {/* Add more family details as needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Family;
