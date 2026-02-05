import React from 'react';
import ChartLineIcon from '@patternfly/react-icons/dist/esm/icons/chart-line-icon';
import ChartBarIcon from '@patternfly/react-icons/dist/esm/icons/chart-bar-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import BriefcaseIcon from '@patternfly/react-icons/dist/esm/icons/briefcase-icon';
import '../styles/Pages.css';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Empower Your Energy Operations</h1>
            <p className="hero-subtitle">
              Advanced trading solutions, real-time analytics, and seamless supply chain integration 
              for energy sector leaders. Transform your operations with Beyond78 Technologies.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div style={{ textAlign: 'center', color: 'white' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px' }}>Energy Solutions Platform</h2>
              <p style={{ fontSize: '16px', opacity: 0.9 }}>Powering the future of energy trading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-light">
        <div className="section-header">
          <h2 className="section-title">Comprehensive Energy Solutions</h2>
          <p className="section-description">
            End-to-end platform designed to optimize every aspect of your energy operations
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <ChartBarIcon style={{ fontSize: '32px' }} />
            </div>
            <h3 className="feature-title">Trading Platform</h3>
            <p className="feature-description">
              Real-time energy commodity trading with live market data and instant execution
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <ChartLineIcon style={{ fontSize: '32px' }} />
            </div>
            <h3 className="feature-title">Analytics & Insights</h3>
            <p className="feature-description">
              Transform data into actionable insights with AI-powered predictive analytics
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <CubeIcon style={{ fontSize: '32px' }} />
            </div>
            <h3 className="feature-title">Supply Chain</h3>
            <p className="feature-description">
              End-to-end visibility and control across your entire energy supply chain network
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <BriefcaseIcon style={{ fontSize: '32px' }} />
            </div>
            <h3 className="feature-title">Expert Consulting</h3>
            <p className="feature-description">
              Strategic guidance from industry experts to optimize your operations
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-white">
        <div className="stats-grid">
          <div className="stat-item">
            <h2 className="stat-number">15+</h2>
            <p className="stat-label">Years of Excellence</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">500+</h2>
            <p className="stat-label">Successful Projects</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">98%</h2>
            <p className="stat-label">Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">24/7</h2>
            <p className="stat-label">Support Available</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to transform your energy operations?</h2>
          <p className="cta-description">
            Connect with our experts to discuss your specific needs and discover how we can help.
          </p>
          <button className="btn btn-primary">Schedule a Consultation</button>
        </div>
      </section>
    </>
  );
};

export default Home;
