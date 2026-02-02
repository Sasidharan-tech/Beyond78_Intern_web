import React from 'react';
import {
  PageSection,
  Title,
  Card,
  CardBody,
  TextContent,
  Text,
  TextVariants,
  Grid,
  GridItem,
  List,
  ListItem
} from '@patternfly/react-core';

const About = () => {
  return (
    <>
      <PageSection variant="light">
        <Title headingLevel="h1" size="3xl">
          About Us
        </Title>
        <TextContent style={{ marginTop: '1rem' }}>
          <Text component={TextVariants.p} style={{ fontSize: '1.1rem' }}>
            Leading the industry with innovation and excellence since our inception.
          </Text>
        </TextContent>
      </PageSection>

      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={6}>
            <Card>
              <CardBody>
                <Title headingLevel="h2" size="xl">
                  Our Mission
                </Title>
                <TextContent style={{ marginTop: '1rem' }}>
                  <Text component={TextVariants.p}>
                    To empower businesses worldwide with cutting-edge technology solutions
                    that drive growth, efficiency, and innovation. We are committed to
                    delivering exceptional value through our expertise and dedication.
                  </Text>
                </TextContent>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem span={12} md={6}>
            <Card>
              <CardBody>
                <Title headingLevel="h2" size="xl">
                  Our Vision
                </Title>
                <TextContent style={{ marginTop: '1rem' }}>
                  <Text component={TextVariants.p}>
                    To be the most trusted partner for businesses seeking digital
                    transformation, recognized globally for our innovative solutions
                    and unwavering commitment to client success.
                  </Text>
                </TextContent>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem span={12}>
            <Card>
              <CardBody>
                <Title headingLevel="h2" size="xl">
                  Our Values
                </Title>
                <List style={{ marginTop: '1rem' }}>
                  <ListItem>
                    <strong>Excellence:</strong> We strive for the highest quality in everything we do
                  </ListItem>
                  <ListItem>
                    <strong>Innovation:</strong> We embrace new ideas and technologies
                  </ListItem>
                  <ListItem>
                    <strong>Integrity:</strong> We conduct business with honesty and transparency
                  </ListItem>
                  <ListItem>
                    <strong>Collaboration:</strong> We believe in the power of teamwork
                  </ListItem>
                  <ListItem>
                    <strong>Customer Focus:</strong> Our clients' success is our success
                  </ListItem>
                </List>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </>
  );
};

export default About;
