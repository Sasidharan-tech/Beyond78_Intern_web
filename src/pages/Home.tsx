import { Grid, GridItem } from '@patternfly/react-core';
import '../styles/Pages.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Microsoft Style */}
      <section className="microsoft-hero">
        <div className="hero-container">
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-badge">Beyond78</div>
              <h2 className="hero-visual-title">Energy Solutions Platform</h2>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-heading">Empower Your Energy Operations</h1>
            <p className="hero-description">
              Introducing Beyond78 Technologies comprehensive platform with advanced 
              trading solutions, real-time analytics, and seamless supply chain integration 
              for energy sector leaders.
            </p>
            <div className="hero-actions">
              <button className="btn-primary-large">Discover Our Platform</button>
              <a href="#services" className="link-arrow">See all solutions</a>
            </div>
          </div>
        </div>
        
        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button className="carousel-btn" aria-label="Pause">⏸</button>
          <button className="carousel-btn active" aria-label="Slide 1">●</button>
          <button className="carousel-btn" aria-label="Slide 2">○</button>
          <button className="carousel-btn" aria-label="Slide 3">○</button>
        </div>
      </section>

      {/* Quick Links - Microsoft Style */}
      <section className="quick-links-section">
        <div className="quick-links-container">
          <a href="#trading" className="quick-link-item">
            <div className="quick-link-icon trading-icon">
              <span className="icon-symbol">📊</span>
            </div>
            <span className="quick-link-text">Trading Platform</span>
          </a>
          
          <a href="#analytics" className="quick-link-item">
            <div className="quick-link-icon analytics-icon">
              <span className="icon-symbol">📈</span>
            </div>
            <span className="quick-link-text">Analytics & Insights</span>
          </a>
          
          <a href="#supply-chain" className="quick-link-item">
            <div className="quick-link-icon supply-icon">
              <span className="icon-symbol">🔗</span>
            </div>
            <span className="quick-link-text">Supply Chain</span>
          </a>
          
          <a href="#consulting" className="quick-link-item">
            <div className="quick-link-icon consulting-icon">
              <span className="icon-symbol">💼</span>
            </div>
            <span className="quick-link-text">Expert Consulting</span>
          </a>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="featured-section">
        <div className="featured-container">
          <Grid hasGutter>
            <GridItem span={12} md={6} lg={3}>
              <div className="featured-card">
                <div className="featured-image trading-bg"></div>
                <div className="featured-content">
                  <h3 className="featured-title">Real-Time Trading Solutions</h3>
                  <p className="featured-description">
                    Advanced platforms for energy commodity trading with live market data and instant execution.
                  </p>
                  <a href="#" className="featured-link">Learn more</a>
                </div>
              </div>
            </GridItem>
            
            <GridItem span={12} md={6} lg={3}>
              <div className="featured-card">
                <div className="featured-image supply-bg"></div>
                <div className="featured-content">
                  <h3 className="featured-title">Supply Chain Optimization</h3>
                  <p className="featured-description">
                    End-to-end visibility and control across your entire energy supply chain network.
                  </p>
                  <a href="#" className="featured-link">Learn more</a>
                </div>
              </div>
            </GridItem>
            
            <GridItem span={12} md={6} lg={3}>
              <div className="featured-card">
                <div className="featured-image analytics-bg"></div>
                <div className="featured-content">
                  <h3 className="featured-title">Predictive Analytics</h3>
                  <p className="featured-description">
                    Transform data into actionable insights with AI-powered analytics and forecasting.
                  </p>
                  <a href="#" className="featured-link">Learn more</a>
                </div>
              </div>
            </GridItem>
            
            <GridItem span={12} md={6} lg={3}>
              <div className="featured-card">
                <div className="featured-image cloud-bg"></div>
                <div className="featured-content">
                  <h3 className="featured-title">Cloud Infrastructure</h3>
                  <p className="featured-description">
                    Scalable, secure cloud solutions designed specifically for energy operations.
                  </p>
                  <a href="#" className="featured-link">Learn more</a>
                </div>
              </div>
            </GridItem>
          </Grid>
        </div>
      </section>

      {/* Stats Section - Microsoft Style */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item-large">
            <h2 className="stat-number">15+</h2>
            <p className="stat-label">Years of Excellence</p>
          </div>
          <div className="stat-item-large">
            <h2 className="stat-number">500+</h2>
            <p className="stat-label">Successful Projects</p>
          </div>
          <div className="stat-item-large">
            <h2 className="stat-number">98%</h2>
            <p className="stat-label">Client Satisfaction</p>
          </div>
          <div className="stat-item-large">
            <h2 className="stat-number">24/7</h2>
            <p className="stat-label">Support Available</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">Ready to transform your energy operations?</h2>
          <p className="cta-banner-text">Connect with our experts to discuss your specific needs.</p>
          <button className="btn-primary-large">Schedule a Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
