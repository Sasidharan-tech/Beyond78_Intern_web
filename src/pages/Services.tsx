import React from 'react';
import { PageSection, Grid, GridItem } from '@patternfly/react-core';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import MobileAltIcon from '@patternfly/react-icons/dist/esm/icons/mobile-alt-icon';
import CloudIcon from '@patternfly/react-icons/dist/esm/icons/cloud-icon';
import PaletteIcon from '@patternfly/react-icons/dist/esm/icons/palette-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/esm/icons/lightbulb-icon';
import WrenchIcon from '@patternfly/react-icons/dist/esm/icons/wrench-icon';
import '../styles/Pages.css';

interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactElement;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies to meet your specific business needs.',
      tags: ['React', 'Node.js', 'TypeScript'],
      icon: <CodeIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
      tags: ['React Native', 'Flutter', 'iOS'],
      icon: <MobileAltIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
      tags: ['AWS', 'Azure', 'DevOps'],
      icon: <CloudIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive experiences for your customers.',
      tags: ['Design', 'Prototyping', 'Research'],
      icon: <PaletteIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and achieve your business goals.',
      tags: ['Strategy', 'Architecture', 'Planning'],
      icon: <LightbulbIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support to ensure your systems run smoothly and efficiently.',
      tags: ['Support', 'Monitoring', 'Updates'],
      icon: <WrenchIcon style={{ fontSize: '32px' }} />
    }
  ];

  return (
    <>
      <PageSection variant="light" className="section">
        <div className="section-header">
          <h1 className="section-title">Our Services</h1>
          <p className="section-description">
            Comprehensive technology solutions tailored to your business needs, delivered by industry experts.
          </p>
        </div>
      </PageSection>

      <PageSection className="section section-white">
        <div className="container">
          <div className="grid grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="card service-card">
                <div className="service-header">
                  <div className="card-icon">
                    {service.icon}
                  </div>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="label label-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default Services;
