import React, { FC } from 'react';
import { Container, Typography } from '@material-ui/core';

const UnderConstruction: FC = () => {
  return (
    <Container component='main' maxWidth='sm'>
      <Typography variant='h2' component='h1' gutterBottom align='center' style={{ marginTop: '2rem' }} color='primary'>
        Under Construction
      </Typography>
    </Container>
  );
};

export { UnderConstruction };
