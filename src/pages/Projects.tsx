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
  Label,
  Button
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

interface Project {
  title: string;
  client: string;
  description: string;
  status: 'Completed' | 'In Progress';
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      client: 'Retail Corp',
      description: 'A comprehensive e-commerce solution with advanced inventory management, payment processing, and customer analytics.',
      status: 'Completed',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Healthcare Management System',
      client: 'MedHealth Inc',
      description: 'Integrated patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      status: 'Completed',
      technologies: ['React', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Financial Analytics Dashboard',
      client: 'Finance Pro',
      description: 'Real-time financial analytics and reporting dashboard with data visualization and predictive insights.',
      status: 'In Progress',
      technologies: ['React', 'Python', 'D3.js']
    },
    {
      title: 'Logistics Management App',
      client: 'Transport LLC',
      description: 'Mobile application for fleet management, route optimization, and real-time tracking of deliveries.',
      status: 'Completed',
      technologies: ['React Native', 'Firebase', 'Maps API']
    },
    {
      title: 'Educational Learning Platform',
      client: 'EduTech Solutions',
      description: 'Interactive online learning platform with video courses, assessments, and student progress tracking.',
      status: 'In Progress',
      technologies: ['React', 'Express', 'MySQL']
    },
    {
      title: 'Social Media Analytics Tool',
      client: 'Marketing Hub',
      description: 'Comprehensive social media monitoring and analytics tool with sentiment analysis and engagement metrics.',
      status: 'Completed',
      technologies: ['React', 'Python', 'ElasticSearch']
    }
  ];

  return (
    <>
      <PageSection variant="light">
        <Title headingLevel="h1" size="3xl">
          Our Projects
        </Title>
        <TextContent style={{ marginTop: '1rem' }}>
          <Text component={TextVariants.p} style={{ fontSize: '1.1rem' }}>
            Showcasing our successful implementations and ongoing work.
          </Text>
        </TextContent>
      </PageSection>

      <PageSection>
        <Gallery hasGutter minWidths={{ default: '100%', md: '400px' }}>
          {projects.map((project, index) => (
            <GalleryItem key={index}>
              <Card isFullHeight>
                <CardTitle>
                  <Title headingLevel="h3" size="xl">
                    {project.title}
                  </Title>
                  <Text component={TextVariants.small} style={{ color: '#6a6e73' }}>
                    Client: {project.client}
                  </Text>
                </CardTitle>
                <CardBody>
                  <TextContent>
                    <Text component={TextVariants.p}>
                      {project.description}
                    </Text>
                  </TextContent>
                  <div style={{ marginTop: '1rem' }}>
                    <Label
                      color={project.status === 'Completed' ? 'green' : 'blue'}
                      style={{ marginBottom: '0.5rem' }}
                    >
                      {project.status}
                    </Label>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Label key={techIndex} color="grey" style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>
                        {tech}
                      </Label>
                    ))}
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <Button variant="link" icon={<ExternalLinkAltIcon />} iconPosition="right" isInline>
                      View Details
                    </Button>
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

export default Projects;
