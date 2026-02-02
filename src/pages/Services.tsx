import React from 'react';
import {
  PageSection,
  Title,
  Card,
  CardTitle,
  CardBody,
  Gallery,
  GalleryItem,
  TextContent,
  Text,
  TextVariants,
  Label
} from '@patternfly/react-core';

interface Service {
  title: string;
  description: string;
  tags: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies to meet your specific business needs.',
      tags: ['React', 'Node.js', 'TypeScript']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
      tags: ['React Native', 'Flutter', 'iOS']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
      tags: ['AWS', 'Azure', 'DevOps']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive experiences for your customers.',
      tags: ['Design', 'Prototyping', 'Research']
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and achieve your business goals.',
      tags: ['Strategy', 'Architecture', 'Planning']
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support to ensure your systems run smoothly and efficiently.',
      tags: ['Support', 'Monitoring', 'Updates']
    }
  ];

  return (
    <>
      <PageSection variant="light">
        <Title headingLevel="h1" size="3xl">
          Our Services
        </Title>
        <TextContent style={{ marginTop: '1rem' }}>
          <Text component={TextVariants.p} style={{ fontSize: '1.1rem' }}>
            Comprehensive solutions tailored to your business needs.
          </Text>
        </TextContent>
      </PageSection>

      <PageSection>
        <Gallery hasGutter minWidths={{ default: '100%', md: '350px' }}>
          {services.map((service, index) => (
            <GalleryItem key={index}>
              <Card isFullHeight>
                <CardTitle>
                  <Title headingLevel="h3" size="xl">
                    {service.title}
                  </Title>
                </CardTitle>
                <CardBody>
                  <TextContent>
                    <Text component={TextVariants.p}>
                      {service.description}
                    </Text>
                  </TextContent>
                  <div style={{ marginTop: '1rem' }}>
                    {service.tags.map((tag, tagIndex) => (
                      <Label key={tagIndex} color="blue" style={{ marginRight: '0.5rem' }}>
                        {tag}
                      </Label>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </>
  );
};

export default Services;
