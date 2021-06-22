import React from 'react';
import { UnderConstruction } from 'components/under-construction/under-construction';
import { Container, Typography } from '@material-ui/core';

export default () => (
  <Container>
    <Typography color='primary' variant='h3' component='h1'>
      Support
    </Typography>
    <UnderConstruction />;
  </Container>
);
