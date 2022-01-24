import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { DonateButton } from 'components/donate-button/donate-button';
import Donate from '../content/donate/donate.mdx';

export default () => (
  <Container>
    <Grid container>
      <Grid item xs={1} />
      <Grid container item justify='center' xs={10}>
        <Typography color='primary' variant='h3' component='h1'>
          Donate
        </Typography>
      </Grid>
    </Grid>
    <Grid container style={{ marginTop: 25 }}>
      <Grid item xs={1} />
      <Grid container item justify='center' xs={10}>
        <Donate />
      </Grid>
    </Grid>
    <Grid container style={{ marginTop: 50 }}>
      <Grid container item justify='center' xs={12}>
        <DonateButton />
      </Grid>
    </Grid>
  </Container>
);
