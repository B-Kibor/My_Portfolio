import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta">
      <motion.div 
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="cta-text">
          Life is not about what you do, it's about the impact you cause and how you make others feel.
        </p>
      </motion.div>
    </section>
  );
};

export default CallToAction;
