import React, { FC, lazy, Suspense } from 'react';
import { Header } from '../components/header/header';
import { Container } from '@material-ui/core';
// @ts-ignore
import { importMDX } from 'mdx.macro';

const Content = lazy(() => importMDX('../../content/faq.mdx'));

const FAQPage: FC = () => {
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

export { FAQPage };
