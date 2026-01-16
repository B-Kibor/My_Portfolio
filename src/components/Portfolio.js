import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    { title: 'LawyersHub', image: '/assets/images/work/lawyershub.png', link: 'https://lawyershub.org/' },
    { title: 'Africalawtech', image: '/assets/images/work/africalaw.png', link: 'https://africalawtechfestival.com/' },
    { title: 'Pig Dice', image: '/assets/images/work/pigdice.png', link: 'https://github.com/B-Kibor/pig_dice' },
    { title: 'Insta Clown', image: '/assets/images/work/insta.png', link: 'https://github.com/B-Kibor/Insta-gram' },
    { title: 'Github Search', image: '/assets/images/work/github.png', link: 'https://github.com/B-Kibor/Ghpages_Api' },
    { title: 'News Highlight', image: '/assets/images/work/news.png', link: 'https://github.com/B-Kibor/news-api' }
  ];

  return (
    <section id="work" className="portfolio">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Recent Works</h2>
          <p className="section-subtitle">These are some of my previous projects.</p>
        </motion.div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="lni lni-link"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="more-works"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/B-Kibor" target="_blank" rel="noopener noreferrer" className="more-btn">
            More Works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
