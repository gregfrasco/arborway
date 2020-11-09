import React, { FC, lazy, Suspense } from 'react';
import { Header } from '../components/header/header';
import { Container, Grid } from '@material-ui/core';
// @ts-ignore
import { importMDX } from 'mdx.macro';
import { MainFeatureCard } from '../components/main-feature-card/main-feature-card';
import greenline from '../assets/greenline.jpg';
import { EventCard } from '../components/event-card/event-card';

const Content = lazy(() => importMDX('../../content/home.mdx'));

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <MainFeatureCard
          title='Sign our petition'
          description='Help us provided high quality reliable transportation for Hyde Square residents.'
          image={greenline}
          imageText='Image of a Green line train on Huntington Ave'
          link='https://www.change.org/p/the-mbta-and-massachusetts-public-officials-extend-the-e-line-along-south-huntington-ave-from-heath-street-to-hyde-sq'
          linkText='Sign'
        />
        <Grid container spacing={4}>
          <EventCard />
        </Grid>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </Container>
    </>
  );
};

export { HomePage };
