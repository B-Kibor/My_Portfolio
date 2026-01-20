import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    { icon: 'lni-code-alt', name: 'Python' },
    { icon: 'lni-html5', name: 'HTML 5' },
    { icon: 'lni-css3', name: 'CSS 3' },
    { icon: 'lni-javascript', name: 'Javascript' },
    { icon: 'lni-react', name: 'React' },
    { icon: 'lni-nodejs', name: 'Angular' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-art-bg">
        <div className="art-circle circle-1"></div>
        <div className="art-circle circle-2"></div>
        <div className="art-line line-1"></div>
        <div className="art-line line-2"></div>
      </div>
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Hi There! I'm Beatrice Kibor</h3>
            <p>
              I am passionate about solving today's problems by building software that counter them. My
              interest in software development began back in high school when I was doing computer
              studies, this scaled up much more on joining campus. Later on after attending a science fair
              majoring in robotics, I really loved the innovations and decided to join Moringa school
              where I spent over six months sharpening my coding skills further and building real and
              innovative applications. I have so far learnt HTML, CSS, Javascript, Git collaboration,
              NGINX servers, Database management, API's, REST Framework, React and specialized in python.
              Moringa school activities proved to be more practical, team-based and challenging.
            </p>
            <div className="contact-info">
              <div className="info-item">
                <i className="lni lni-envelope"></i>
                <span>kibor9346@gmail.com</span>
              </div>
              <div className="info-item">
                <i className="lni lni-phone-handset"></i>
                <span>+254 718 630 482</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={`lni ${skill.icon}`}></i>
                <h4>{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
