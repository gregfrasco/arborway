import React from 'react';
import { Container, Typography } from '@material-ui/core';

import FAQ from '../content/faq/faq.mdx';

export default () => (
  <Container>
    <Typography color='primary' variant='h4' component='h1' style={{ marginBottom: 25, fontWeight: 'bold' }}>
      Frequently Asked Questions
    </Typography>
    <FAQ />
  </Container>
);
