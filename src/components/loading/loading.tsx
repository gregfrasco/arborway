import React, { FC } from 'react';
import { CircularProgress, Container } from '@material-ui/core';

const Loading: FC = () => {
  return (
    <Container component='main' style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color='primary' size={160} style={{ marginTop: '3 rem' }} />
    </Container>
  );
};

export { Loading };
