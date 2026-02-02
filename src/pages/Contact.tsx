import React from 'react';
import {
  PageSection,
  Title,
  Card,
  CardBody,
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Grid,
  GridItem,
  TextContent,
  Text,
  TextVariants,
  List,
  ListItem
} from '@patternfly/react-core';
import { EnvelopeIcon, PhoneIcon, MapMarkerIcon } from '@patternfly/react-icons';

const Contact: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { name, email, subject, message });
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <PageSection variant="light">
        <Title headingLevel="h1" size="3xl">
          Contact Us
        </Title>
        <TextContent style={{ marginTop: '1rem' }}>
          <Text component={TextVariants.p} style={{ fontSize: '1.1rem' }}>
            Get in touch with our team. We're here to help you succeed.
          </Text>
        </TextContent>
      </PageSection>

      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={7}>
            <Card>
              <CardBody>
                <Title headingLevel="h2" size="xl" style={{ marginBottom: '1rem' }}>
                  Send us a Message
                </Title>
                <Form onSubmit={handleSubmit}>
                  <FormGroup label="Name" isRequired fieldId="name">
                    <TextInput
                      isRequired
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(_event, value) => setName(value)}
                      placeholder="Enter your name"
                    />
                  </FormGroup>
                  <FormGroup label="Email" isRequired fieldId="email">
                    <TextInput
                      isRequired
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(_event, value) => setEmail(value)}
                      placeholder="your.email@example.com"
                    />
                  </FormGroup>
                  <FormGroup label="Subject" isRequired fieldId="subject">
                    <TextInput
                      isRequired
                      type="text"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(_event, value) => setSubject(value)}
                      placeholder="What is this regarding?"
                    />
                  </FormGroup>
                  <FormGroup label="Message" isRequired fieldId="message">
                    <TextArea
                      isRequired
                      id="message"
                      name="message"
                      value={message}
                      onChange={(_event, value) => setMessage(value)}
                      placeholder="Tell us more about your needs..."
                      rows={6}
                    />
                  </FormGroup>
                  <Button type="submit" variant="primary">
                    Send Message
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem span={12} md={5}>
            <Card>
              <CardBody>
                <Title headingLevel="h2" size="xl" style={{ marginBottom: '1rem' }}>
                  Contact Information
                </Title>
                <List isPlain>
                  <ListItem icon={<EnvelopeIcon />}>
                    <strong>Email:</strong>
                    <br />
                    <a href="mailto:info@company.com">info@company.com</a>
                  </ListItem>
                  <ListItem icon={<PhoneIcon />} style={{ marginTop: '1rem' }}>
                    <strong>Phone:</strong>
                    <br />
                    +1 (555) 123-4567
                  </ListItem>
                  <ListItem icon={<MapMarkerIcon />} style={{ marginTop: '1rem' }}>
                    <strong>Address:</strong>
                    <br />
                    123 Business Avenue
                    <br />
                    Suite 100
                    <br />
                    New York, NY 10001
                  </ListItem>
                </List>
              </CardBody>
            </Card>

            <Card style={{ marginTop: '1rem' }}>
              <CardBody>
                <Title headingLevel="h3" size="lg" style={{ marginBottom: '1rem' }}>
                  Business Hours
                </Title>
                <TextContent>
                  <Text component={TextVariants.p}>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                  </Text>
                  <Text component={TextVariants.p}>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                  </Text>
                  <Text component={TextVariants.p}>
                    <strong>Sunday:</strong> Closed
                  </Text>
                </TextContent>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </>
  );
};

export default Contact;
