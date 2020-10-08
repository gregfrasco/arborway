import React, { FC, lazy, Suspense } from 'react';
import { Header } from '../components/header/header';
import { Container } from '@material-ui/core';

import Content from './home.mdx'

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </Container>
    </>
  );
};

export { HomePage };
