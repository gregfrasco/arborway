import React from 'react';
import { Box, Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { MainFeatureCard } from 'components/main-feature-card/main-feature-card';

const greenline = require('../assets/greenline.jpg');
const welcome = require('../assets/jp-welcome.jpg');

import HydeSquare from '../content/hydesquare.mdx';
import WhyExtend from '../content/why-extension.mdx';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

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
      <MainFeatureCard image={greenline} imageText='Hero Image' />
      <Grid container spacing={5}>
        <Grid container item justify='center' xs={12} className={classes.section}>
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
        <Grid item xs={12}>
          <WhyExtend />
        </Grid>
        <Grid container item justify='center' xs={12} className={classes.section}>
          <Typography variant='h4'>Hyde Square Green Line Service would:</Typography>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Strengthen Boston's Latin Quarter
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Place Hyde Square on the T map
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Promote the goal of environmental justice
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Help merchants by increasing foot traffic in Hyde Square
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Provide better access for more customers with fewer cars
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Accommodate new residential construction along South Huntington Avenue
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Connect residents with a reliable one-seat ride into the subway system
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Strengthen the MBTA by encouraging new riders and increased fare collections
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Protect E-line service from being cut
            </Typography>
          </Box>
        </Grid>
        <Grid item justify='center' xs={12} sm={12} md={6}>
          <Box className={classes.iconContainer}>
            <Typography variant='h6'>
              <CheckIcon className={classes.icon} />
              Act as a catalyst for the "completes street design"
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
