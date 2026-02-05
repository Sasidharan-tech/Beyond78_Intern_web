import React from 'react';
import { PageSection, Grid, GridItem } from '@patternfly/react-core';
import EnvelopeIcon from '@patternfly/react-icons/dist/esm/icons/envelope-icon';
import PhoneIcon from '@patternfly/react-icons/dist/esm/icons/phone-icon';
import MapMarkerIcon from '@patternfly/react-icons/dist/esm/icons/map-marker-icon';
import '../styles/Pages.css';

const Contact: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, subject, message });
    alert('Thank you for your message! We will get back to you soon.');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <PageSection variant="light" className="section">
        <div className="section-header">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-description">
            Get in touch with our team. We're here to help you succeed.
          </p>
        </div>
      </PageSection>

      <PageSection className="section section-white">
        <div className="container">
          <Grid hasGutter>
            <GridItem span={12} md={7}>
              <div className="card">
                <h2 style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--space-lg)',
                  color: 'var(--color-text-primary)'
                }}>
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="form-container">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      required
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us more about your needs..."
                      rows={5}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </GridItem>

            <GridItem span={12} md={5}>
              <div className="card">
                <h2 style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--space-lg)',
                  color: 'var(--color-text-primary)'
                }}>
                  Contact Information
                </h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <EnvelopeIcon style={{ fontSize: '20px' }} />
                    </div>
                    <div className="contact-content">
                      <p className="contact-title">Email</p>
                      <p className="contact-text">info@beyond78.com</p>
                      <p className="contact-text">support@beyond78.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <PhoneIcon style={{ fontSize: '20px' }} />
                    </div>
                    <div className="contact-content">
                      <p className="contact-title">Phone</p>
                      <p className="contact-text">+1 (555) 123-4567</p>
                      <p className="contact-text">+1 (555) 765-4321</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapMarkerIcon style={{ fontSize: '20px' }} />
                    </div>
                    <div className="contact-content">
                      <p className="contact-title">Office</p>
                      <p className="contact-text">
                        123 Energy Plaza<br />
                        Suite 500<br />
                        Houston, TX 77002
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  marginTop: 'var(--space-2xl)', 
                  paddingTop: 'var(--space-lg)',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-md)', 
                    fontWeight: 'var(--font-weight-semibold)',
                    marginBottom: 'var(--space-sm)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Business Hours
                  </h3>
                  <p className="contact-text">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </GridItem>
          </Grid>
        </div>
      </PageSection>
    </>
  );
};

export default Contact;
