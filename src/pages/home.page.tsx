import React, { FC, lazy, Suspense } from 'react';
import { Header } from '../components/header/header';
import { Container, Grid } from '@material-ui/core';
// @ts-ignore
import { importMDX } from 'mdx.macro';
import { MainFeatureCard } from '../components/main-feature-card/main-feature-card';
import { EventCard } from '../components/event-card/event-card';
import { ImageCard } from '../components/image-card/image-card';

import greenline from '../assets/greenline.jpg';
import ELineStops from '../assets/E-Line-Stops.jpg';
import { Footer } from '../components/footer/footer';

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
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7} md={8}>
            <Suspense fallback={<div>Loading...</div>}>
              <Content />
            </Suspense>
          </Grid>
          <ImageCard image={ELineStops} description='Green Line Extension to Hyde Square' />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export { HomePage };
