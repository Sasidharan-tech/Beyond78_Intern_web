import React from 'react';
import { PageSection } from '@patternfly/react-core';
import ShoppingCartIcon from '@patternfly/react-icons/dist/esm/icons/shopping-cart-icon';
import HospitalIcon from '@patternfly/react-icons/dist/esm/icons/hospital-icon';
import ChartAreaIcon from '@patternfly/react-icons/dist/esm/icons/chart-area-icon';
import TruckIcon from '@patternfly/react-icons/dist/esm/icons/truck-icon';
import GraduationCapIcon from '@patternfly/react-icons/dist/esm/icons/graduation-cap-icon';
import BuildingIcon from '@patternfly/react-icons/dist/esm/icons/building-icon';
import '../styles/Pages.css';

interface Project {
  title: string;
  client: string;
  description: string;
  status: 'Completed' | 'In Progress';
  technologies: string[];
  icon: React.ReactElement;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      client: 'Retail Corp',
      description: 'A comprehensive e-commerce solution with advanced inventory management, payment processing, and customer analytics.',
      status: 'Completed',
      technologies: ['React', 'Node.js', 'MongoDB'],
      icon: <ShoppingCartIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Healthcare Management System',
      client: 'MedHealth Inc',
      description: 'Integrated patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      status: 'Completed',
      technologies: ['React', 'PostgreSQL', 'AWS'],
      icon: <HospitalIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Financial Analytics Dashboard',
      client: 'Finance Pro',
      description: 'Real-time financial analytics and reporting dashboard with data visualization and predictive insights.',
      status: 'In Progress',
      technologies: ['React', 'Python', 'D3.js'],
      icon: <ChartAreaIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Logistics Management App',
      client: 'Transport LLC',
      description: 'Mobile application for fleet management, route optimization, and real-time tracking of deliveries.',
      status: 'Completed',
      technologies: ['React Native', 'Firebase', 'Maps API'],
      icon: <TruckIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Educational Learning Platform',
      client: 'EduTech Solutions',
      description: 'Interactive online learning platform with video courses, assessments, and student progress tracking.',
      status: 'In Progress',
      technologies: ['React', 'Express', 'MySQL'],
      icon: <GraduationCapIcon style={{ fontSize: '32px' }} />
    },
    {
      title: 'Social Media Analytics Tool',
      client: 'Marketing Hub',
      description: 'Comprehensive social media monitoring and analytics tool with sentiment analysis and engagement metrics.',
      status: 'Completed',
      technologies: ['React', 'Python', 'ElasticSearch'],
      icon: <BuildingIcon style={{ fontSize: '32px' }} />
    }
  ];

  return (
    <>
      <PageSection variant="light" className="section">
        <div className="section-header">
          <h1 className="section-title">Our Projects</h1>
          <p className="section-description">
            Showcasing our successful implementations and ongoing work across diverse industries.
          </p>
        </div>
      </PageSection>

      <PageSection className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="card project-card">
                <div className="project-header">
                  <div className="card-icon">
                    {project.icon}
                  </div>
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p style={{ 
                  fontSize: 'var(--font-size-xs)', 
                  color: 'var(--color-text-tertiary)',
                  marginBottom: 'var(--space-sm)'
                }}>
                  Client: {project.client}
                </p>
                <p className="card-description">{project.description}</p>
                <div style={{ marginTop: 'var(--space-md)' }}>
                  <span className={project.status === 'Completed' ? 'label label-success' : 'label label-primary'}>
                    {project.status}
                  </span>
                </div>
                <div style={{ 
                  marginTop: 'var(--space-sm)', 
                  display: 'flex', 
                  gap: 'var(--space-xs)', 
                  flexWrap: 'wrap' 
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="label">
                      {tech}
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

export default Projects;
