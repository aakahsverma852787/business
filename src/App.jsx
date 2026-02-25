import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import images
import aakashPhoto from './assets/images/aakash.jpg';
import cert1 from './assets/certificates/cert1.jpg';
import cert2 from './assets/certificates/cert2.jpg';
import cert3 from './assets/certificates/cert3.jpg';
import cert4 from './assets/certificates/cert4.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const services = [
    {
      icon: '✅',
      title: 'Data Validation & QA',
      desc: '10,000+ entries monthly with 95%+ accuracy',
      features: ['Product matching', 'E-commerce validation', 'Database cleaning', 'Quality assurance'],
      price: '₹50,000'
    },
    {
      icon: '🔍',
      title: 'Content Moderation',
      desc: '5,000+ daily reviews',
      features: ['Image moderation', 'Text review', 'Policy compliance', 'AI content check'],
      price: '₹40,000'
    },
    {
      icon: '📊',
      title: 'Market Research',
      desc: '500+ verified leads',
      features: ['Competitor analysis', 'Industry reports', 'B2B leads', 'CRM-ready data'],
      price: '₹70,000'
    },
    {
      icon: '📈',
      title: 'Data Entry',
      desc: 'Bulk processing',
      features: ['High-volume entry', 'Excel processing', 'Database management', 'Data formatting'],
      price: '₹30,000'
    }
  ];

  const certifications = [
    { img: cert1, title: 'Business Analytics with Excel', issuer: 'Microsoft / Simplilearn' },
    { img: cert2, title: 'Data Analytics', issuer: 'Simplilearn' },
    { img: cert3, title: 'MS Excel', issuer: 'Microsoft / Simplilearn' },
    { img: cert4, title: 'NCVET Certificate', issuer: 'Govt of India', grade: '80.17%', featured: true }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '30,000',
      features: ['5,000 entries', '2 team members', 'Weekly reports', 'Email support', '95% accuracy']
    },
    {
      name: 'Professional',
      price: '70,000',
      features: ['15,000 entries', '4 team members', 'Daily reports', 'Priority support', '97% accuracy', 'Account manager'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '1,50,000',
      features: ['Unlimited entries', '10 team members', 'Real-time reports', '24/7 support', '98% accuracy', 'Custom workflows', 'SLA']
    }
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <h2>Aakash Data Solutions</h2>
            <p>Professional Team</p>
          </motion.div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['Home', 'Services', 'Team', 'Pricing', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setActiveSection(item.toLowerCase())}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="hero-badge">
            🏆 Professional Data Operations Team
          </motion.div>
          <motion.h1 variants={fadeIn} className="hero-title">
            Scale Your Business
            <span className="gradient-text">With Expert Data Team</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="hero-subtitle">
            5-10 Specialists | 95%+ Accuracy | 100K+ Data Points Processed
          </motion.p>
          
          <motion.div variants={staggerContainer} className="stats-grid">
            {[
              { num: '10', label: 'Team Members' },
              { num: '100K+', label: 'Data Points' },
              { num: '95%', label: 'Accuracy' },
              { num: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="stat-card"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <h3>{stat.num}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} className="hero-buttons">
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.a>
            <motion.a 
              href="#services" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Background */}
        <div className="hero-bg">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-tag">What We Offer</span>
            <h2>Professional Services</h2>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="service-card"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              >
                <motion.div 
                  className="service-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul>
                  {service.features.map((f, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                    >
                      {f}
                    </motion.li>
                  ))}
                </ul>
                <div className="service-price">{service.price}/month</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            
            <motion.div 
              className="team-lead-card"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={aakashPhoto} 
                alt="Aakash Verma"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <h3>Aakash Verma</h3>
              <p className="role">Founder & Team Lead</p>
              <p className="bio">3+ years in Data Operations | NCVET Certified | 100K+ processed</p>
              <div className="contact-links">
                <motion.a whileHover={{ scale: 1.1 }} href="tel:+918527879047">📱 Call</motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="mailto:aakashverma852787@outlook.com">✉️ Email</motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://linkedin.com/in/aakash-verma-3b1187272">💼 LinkedIn</motion.a>
              </div>
            </motion.div>

            <h3 className="certs-title">Professional Certifications</h3>
            <motion.div 
              className="certs-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className={`cert-card ${cert.featured ? 'featured' : ''}`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <img src={cert.img} alt={cert.title} />
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                    {cert.grade && <p className="grade">Grade: {cert.grade}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Flexible Pricing</h2>
            <div className="pricing-grid">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={i}
                  className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">₹{plan.price}<span>/mo</span></div>
                  <ul>
                    {plan.features.map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05 }}
                      >
                        ✓ {f}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button 
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-wrapper">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Contact Information</h3>
              {[
                { icon: '👤', label: 'Name', value: 'Aakash Verma' },
                { icon: '📱', label: 'Phone', value: '+91 85278 79047' },
                { icon: '✉️', label: 'Email', value: 'aakashverma852787@outlook.com' },
                { icon: '📍', label: 'Location', value: 'New Delhi, India' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="info-item"
                  whileHover={{ x: 10 }}
                >
                  <span className="icon">{item.icon}</span>
                  <div>
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.form 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="tel" placeholder="Phone Number" />
              <select required>
                <option>Select Service *</option>
                <option>Data Validation</option>
                <option>Content Moderation</option>
                <option>Market Research</option>
              </select>
              <textarea placeholder="Project Details *" rows="5" required></textarea>
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <h3>Aakash Data Solutions</h3>
              <p>Professional data operations team</p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>Data Validation</li>
                <li>Content Moderation</li>
                <li>Market Research</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <p>📱 +91 85278 79047</p>
              <p>✉️ aakashverma852787@outlook.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Aakash Data Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
