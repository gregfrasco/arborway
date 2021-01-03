import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Eco, Commute, Room } from '@material-ui/icons';
import { MainFeatureCard } from 'components/main-feature-card/main-feature-card';

import Welcome from '../content/welcome.mdx';
import Mission from '../content/mission.mdx';
import { ImageCard } from 'components/image-card/image-card';
import { EventCard } from 'components/event-card/event-card';

const greenline = require('../assets/greenline.jpg');
const ELineStops = require('../assets/E-Line-Stops.jpg');

export default () => (
  <Container>
    <MainFeatureCard image={greenline} imageText='Image of a Green line train on Huntington Ave' />
    <Grid container>
      <Grid item xs={12} md={6}>
        <Welcome />
        <Button variant='contained' color='primary' size='medium'>
          {' '}
          Read out mission statement{' '}
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <EventCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <Mission />
      </Grid>
      <Grid item xs={12} md={6}>
        <ImageCard image={ELineStops} description='Green Line Extension to Hyde Square' />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography align='center' variant='h5' color='primary'>
          <Room style={{ verticalAlign: 'middle', fontSize: 32 }} />
          Huntington Avenue
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography align='center' variant='h5' color='primary'>
          <Commute style={{ verticalAlign: 'middle', fontSize: 32 }} />
          Complete Streets
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography align='center' variant='h5' color='primary'>
          <Eco style={{ verticalAlign: 'middle', fontSize: 32 }} />
          Environmental Justice
        </Typography>
      </Grid>
    </Grid>
  </Container>
);
