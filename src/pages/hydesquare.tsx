import React from 'react';
import { Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { MainFeatureCard } from 'components/main-feature-card/main-feature-card';

const greenline = require('../assets/greenline.jpg');
const welcome = require('../assets/jp-welcome.jpg');

import HydeSquare from '../content/hydesquare.mdx';

export default () => {
  return (
    <Container>
      <MainFeatureCard image={greenline} imageText='Hero Image' />
      <Grid container>
        <Grid container item justify='center' xs={12}>
          <Typography variant='h4'>The Green Line Extension from Heath Street to Hyde Square Jamaica Plain</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <HydeSquare />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia component='img' image={welcome} height='auto' />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
