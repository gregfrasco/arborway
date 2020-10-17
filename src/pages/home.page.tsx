import React, { FC, lazy, Suspense } from 'react';
import { Header } from '../components/header/header';
import { Container } from '@material-ui/core';
// @ts-ignore
import { importMDX } from 'mdx.macro';
import { FeatureCard } from '../components/feature-card/feature-card';

const Content = lazy(() => importMDX('../content/home.mdx'));

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <FeatureCard
          title='Sign our petition'
          description='Help us provided high quality reliable transportation for Hyde Square residents.'
          image='https://images.unsplash.com/photo-1557616223-c021d2a8e0f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80'
          imageText='Image of a Green line train on Huntington Ave'
          link='https://www.change.org/p/the-mbta-and-massachusetts-public-officials-extend-the-e-line-along-south-huntington-ave-from-heath-street-to-hyde-sq'
          linkText='Sign'
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </Container>
    </>
  );
};

export { HomePage };
