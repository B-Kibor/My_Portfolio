import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-art-bg">
        <div className="art-circle circle-1"></div>
        <div className="art-circle circle-2"></div>
        <div className="art-circle circle-3"></div>
        <div className="art-line line-1"></div>
        <div className="art-line line-2"></div>
        <div className="art-line line-3"></div>
      </div>
      <motion.div 
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="cta-text">
          Code is poetry written in logic, and every line tells a story of innovation and possibility.
        </p>
      </motion.div>
    </section>
  );
};

export default CallToAction;
