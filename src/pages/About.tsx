import React from 'react';
import { PageSection, Title, Grid, GridItem, Card, CardBody, TextContent, Text, TextVariants } from '@patternfly/react-core';
import ChartLineIcon from '@patternfly/react-icons/dist/esm/icons/chart-line-icon';
import ShieldAltIcon from '@patternfly/react-icons/dist/esm/icons/shield-alt-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';

import '../styles/Pages.css';

interface ExpertiseItem {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const expertiseItems: ExpertiseItem[] = [
    {
      icon: <ChartLineIcon style={{ fontSize: '32px' }} />,
      title: 'Trading Operations Enablement',
      description: 'Streamlined capture, processing, and execution of trades with systems designed for speed and accuracy.'
    },
    {
      icon: <ShieldAltIcon style={{ fontSize: '32px' }} />,
      title: 'Risk Management & Analytics',
      description: 'Real-time insights into exposure, price movements, counterparty risks, and market scenarios.'
    },
    {
      icon: <CubeIcon style={{ fontSize: '32px' }} />,
      title: 'Logistics & Integration',
      description: 'Seamless integration across shipping, storage, freight, and inventory systems to ensure timely and efficient delivery.'
    },
    {
      icon: <CogIcon style={{ fontSize: '32px' }} />,
      title: 'Business Process Optimisation',
      description: 'Intelligent automation, data-driven workflows, and modernised business processes that improve operational efficiency.'
    },
    {
      icon: <DatabaseIcon style={{ fontSize: '32px' }} />,
      title: 'Data Infrastructure & Digital Architecture',
      description: 'Cloud-native platforms, API-driven integration, and analytics frameworks for scalability and long-term transformation.'
    }
  ];

  return (
    <>
      <PageSection variant="light" className="section">
        <div className="section-header">
          <h1 className="section-title">About Us</h1>
          <p className="section-description">
            Beyond78 Technologies delivers transformative energy solutions, combining deep industry expertise 
            with cutting-edge technology to power the future of energy trading and operations.
          </p>
        </div>
      </PageSection>

      <PageSection className="section section-white">
        <div className="container">
          <h2 style={{ 
            fontSize: 'var(--font-size-2xl)', 
            fontWeight: 'var(--font-weight-bold)', 
            marginBottom: 'var(--space-2xl)',
            color: 'var(--color-text-primary)'
          }}>
            Our Expertise
          </h2>
          
          <Grid hasGutter>
            {expertiseItems.map((item, index) => (
              <GridItem key={index} span={12}>
                <div className="expertise-card">
                  <div className="expertise-item">
                    <div className="expertise-icon-wrapper">
                      <div className="expertise-icon">
                        {item.icon}
                      </div>
                    </div>
                    <div className="expertise-content">
                      <h3 className="expertise-title">{item.title}</h3>
                      <p className="expertise-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </GridItem>
            ))}
          </Grid>
        </div>
      </PageSection>
    </>
  );
};

export default About;
