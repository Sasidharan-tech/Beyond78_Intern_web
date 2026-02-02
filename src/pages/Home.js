import React from 'react';
import {
  PageSection,
  Title,
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  TextVariants,
  Button,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import { ArrowRightIcon } from '@patternfly/react-icons';

const Home = () => {
  return (
    <>
      <PageSection variant="light">
        <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsLg' }}>
          <FlexItem>
            <Title headingLevel="h1" size="4xl">
              Welcome to Our Company
            </Title>
          </FlexItem>
          <FlexItem>
            <TextContent>
              <Text component={TextVariants.p} style={{ fontSize: '1.2rem' }}>
                We deliver exceptional solutions to help your business thrive in the digital age.
              </Text>
            </TextContent>
          </FlexItem>
          <FlexItem>
            <Button variant="primary" icon={<ArrowRightIcon />} iconPosition="right">
              Get Started
            </Button>
          </FlexItem>
        </Flex>
      </PageSection>

      <PageSection>
        <Title headingLevel="h2" size="2xl" style={{ marginBottom: '2rem' }}>
          Our Key Features
        </Title>
        <Gallery hasGutter minWidths={{ default: '100%', md: '300px' }}>
          <GalleryItem>
            <Card isFullHeight>
              <CardBody>
                <Title headingLevel="h3" size="xl">
                  Innovation
                </Title>
                <TextContent style={{ marginTop: '1rem' }}>
                  <Text component={TextVariants.p}>
                    Cutting-edge solutions that keep you ahead of the competition
                    with the latest technologies and methodologies.
                  </Text>
                </TextContent>
              </CardBody>
            </Card>
          </GalleryItem>
          <GalleryItem>
            <Card isFullHeight>
              <CardBody>
                <Title headingLevel="h3" size="xl">
                  Quality
                </Title>
                <TextContent style={{ marginTop: '1rem' }}>
                  <Text component={TextVariants.p}>
                    Premium quality in every project we deliver, ensuring
                    excellence and reliability at every step.
                  </Text>
                </TextContent>
              </CardBody>
            </Card>
          </GalleryItem>
          <GalleryItem>
            <Card isFullHeight>
              <CardBody>
                <Title headingLevel="h3" size="xl">
                  Support
                </Title>
                <TextContent style={{ marginTop: '1rem' }}>
                  <Text component={TextVariants.p}>
                    24/7 customer support to ensure your success with dedicated
                    assistance whenever you need it.
                  </Text>
                </TextContent>
              </CardBody>
            </Card>
          </GalleryItem>
        </Gallery>
      </PageSection>
    </>
  );
};

export default Home;
