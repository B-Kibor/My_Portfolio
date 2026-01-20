import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      <motion.div 
        className="hero-bg-layer"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="hero-subtitle">Hello, I'm</h4>
          <h1 className="hero-title">Beatrice Kibor</h1>
          <p className="hero-description">A Full-Stack UI Designer & Web Developer</p>
          <a href="#work" className="hero-btn">View Projects</a>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/betty-kibor-4483b5317/" target="_blank" rel="noopener noreferrer">
              <i className="lni lni-linkedin-original"></i>
            </a>
            <a href="https://github.com/B-Kibor" target="_blank" rel="noopener noreferrer">
              <i className="lni lni-github-original"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="lni lni-twitter-original"></i>
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/banner/hero.jpg`} 
            alt="Beatrice Kibor"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
