import React from 'react';
import { Box, Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { MainFeatureCard } from 'components/main-feature-card/main-feature-card';

const hydesq = require('../assets/hyde-sq.jpg');
const welcome = require('../assets/jp-welcome.jpg');

import HydeSquare from '../content/hyde sq/hydesquare.mdx';
import WhyExtend from '../content/hyde sq/why-extension.mdx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  section: {
    marginTop: spacing(4),
    marginBottom: spacing(4)
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'left',
    flexWrap: 'wrap'
  },
  icon: {
    marginRight: spacing(1)
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Container>
      <MainFeatureCard image={hydesq} imageText='Hero Image' />
      <Grid container spacing={5}>
        <Grid container item justify='center' xs={12} className={classes.section}>
          <Typography variant='h4'>
            The{' '}
            <Box component='span' fontWeight='fontWeightBold'>
              Green Line Extension
            </Box>{' '}
            from Heath Street to Hyde Square Jamaica Plain
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <HydeSquare />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia component='img' image={welcome} height='auto' />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <WhyExtend />
        </Grid>
      </Grid>
    </Container>
  );
};
