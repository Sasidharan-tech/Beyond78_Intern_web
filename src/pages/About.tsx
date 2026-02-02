import { Component } from 'react';
import { Card, CardBody, Title, PageSection } from '@patternfly/react-core';

import '../styles/Pages.css';

interface AboutUsProps {
  title: string;
}

class AboutUsComponent extends Component<AboutUsProps> {
  getTitle(): string {
    return `${this.props.title}`;
  }

  render() {
    return (
      <Card className="about-us-card">
        <div className="about-us-title-container">
          <Title headingLevel="h2" className="about-us-title">
            {this.getTitle()}
          </Title>
        </div>
        <CardBody className="about-us-content">
          <div className="about-us-list">
            <div className="about-us-item">
              <p className="about-us-bullet">• Trading Operations Enablement</p>
              <p className="about-us-description">
                Streamlined capture, processing, and execution of trades with systems designed for speed and accuracy.
              </p>
            </div>
            <div className="about-us-item">
              <p className="about-us-bullet">• Risk Management & Analytics</p>
              <p className="about-us-description">
                Real-time insights into exposure, price movements, counterparty risks, and market scenarios.
              </p>
            </div>
            <div className="about-us-item">
              <p className="about-us-bullet">• Logistics & Integration</p>
              <p className="about-us-description">
                Seamless integration across shipping, storage, freight, and inventory systems to ensure timely and efficient delivery.
              </p>
            </div>
            <div className="about-us-item">
              <p className="about-us-bullet">• Business Process Optimisation</p>
              <p className="about-us-description">
                Intelligent automation, data-driven workflows, and modernised business processes that improve operational efficiency.
              </p>
            </div>
            <div className="about-us-item">
              <p className="about-us-bullet">• Data Infrastructure & Digital Architecture</p>
              <p className="about-us-description">
                Cloud-native platforms, API-driven integration, and analytics frameworks for scalability and long-term transformation.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

const About: React.FC = () => {
  return (
    <>
      <PageSection variant="light">
        <Title headingLevel="h1" size="3xl">
          About Us
        </Title>
      </PageSection>
      <PageSection>
        <AboutUsComponent title="Our Expertise" />
      </PageSection>
    </>
  );
};

export default About;
