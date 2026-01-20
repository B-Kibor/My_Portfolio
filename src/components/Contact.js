import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { icon: 'lni-map-marker', title: 'GitHub', value: 'https://github.com/B-Kibor', isLink: true },
    { icon: 'lni-phone', title: 'Phone', value: '+254 718 630 482', isLink: false },
    { icon: 'lni-envelope', title: 'Email', value: 'kibor9346@gmail.com', isLink: false }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-art-bg">
        <div className="art-circle circle-1"></div>
        <div className="art-circle circle-2"></div>
        <div className="art-line line-1"></div>
        <div className="art-line line-2"></div>
      </div>
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Need to talk or make inquiries on my work?</p>
        </motion.div>
        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="contact-icon">
                <i className={`lni ${item.icon}`}></i>
              </div>
              <h6>{item.title}</h6>
              {item.isLink ? (
                <a href={item.value} target="_blank" rel="noopener noreferrer">{item.value}</a>
              ) : (
                <p>{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
