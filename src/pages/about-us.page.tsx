import React, { FC, lazy, Suspense } from 'react';
import { Header } from '../components/header/header';
import { Container } from '@material-ui/core';
// @ts-ignore
import { importMDX } from 'mdx.macro';

const Content = lazy(() => importMDX('../../content/about-us.mdx'));
const BoardOfDirectors = lazy(() => importMDX('../../content/board-of-directors.mdx'));

const AboutUsPage: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <BoardOfDirectors />
        </Suspense>
      </Container>
    </>
  );
};

export { AboutUsPage };
