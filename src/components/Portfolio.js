import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const projects = [
    { 
      title: 'Project One', 
      image: `${process.env.PUBLIC_URL}/assets/images/work/Screenshot from 2026-01-19 10-50-28.png`, 
      link: 'https://github.com/B-Kibor/project-one' 
    },
    { 
      title: 'Project Two', 
      image: `${process.env.PUBLIC_URL}/assets/images/work/Screenshot from 2026-01-19 11-00-43.png`, 
      link: 'https://github.com/B-Kibor/project-two' 
    },
    { 
      title: 'Project Three', 
      image: `${process.env.PUBLIC_URL}/assets/images/work/Screenshot from 2026-01-20 09-13-57.png`, 
      link: 'https://github.com/B-Kibor/project-three' 
    }
  ];

  const handleImageError = (e, title) => {
    e.target.src = `https://via.placeholder.com/400x250/667eea/ffffff?text=${encodeURIComponent(title)}`;
  };

  const openModal = (project) => {
    setSelectedImage(project);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="work" className="portfolio">
      <div className="portfolio-art-bg">
        <div className="art-circle circle-1"></div>
        <div className="art-circle circle-2"></div>
        <div className="art-circle circle-3"></div>
        <div className="art-line line-1"></div>
        <div className="art-line line-2"></div>
      </div>
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
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => handleImageError(e, project.title)}
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
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
      
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
