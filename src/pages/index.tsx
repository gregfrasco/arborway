import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Eco, Commute, Room } from '@material-ui/icons';
import { MainFeatureCard } from 'components/main-feature-card/main-feature-card';

import Welcome from '../content/welcome.mdx';
import Mission from '../content/mission.mdx';
import { ImageCard } from 'components/image-card/image-card';
import { EventCard } from 'components/event-card/event-card';
import { makeStyles } from '@material-ui/core/styles';

const greenline = require('../assets/greenline.jpg');
const ELineStops = require('../assets/E-Line-Stops.jpg');

const useStyles = makeStyles(({ spacing }) => ({
  section: {
    marginTop: spacing(4),
    marginBottom: spacing(4)
  },
  button: {
    marginTop: spacing(4)
  },
  icon: {
    verticalAlign: 'middle',
    fontSize: 32
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Container>
      <MainFeatureCard
        image={greenline}
        imageText='Hero Image'
        title='Sign our petition'
        description='Help us provided high quality reliable transportation for Hyde Square residents.'
        link='https://www.change.org/p/the-mbta-and-massachusetts-public-officials-extend-the-e-line-along-south-huntington-ave-from-heath-street-to-hyde-sq'
        linkText='Sign on Change.org'
      />
      <Grid container>
        <Grid container xs={12} md={6}>
          <Grid item xs={12} className={classes.section}>
            <Welcome />
            <Button variant='contained' color='primary' size='medium' className={classes.button}>
              Read our mission statement
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <Mission />
            <Button variant='contained' color='primary' size='medium' style={{ marginTop: 15 }}>
              Learn More about Hyde Square
            </Button>
          </Grid>
        </Grid>
        <Grid container xs={12} md={6}>
          <Grid container justify='center' xs={12} className={classes.section}>
            <EventCard />
          </Grid>
          <Grid container justify='center' xs={12} className={classes.section}>
            <ImageCard image={ELineStops} description='Green Line Extension to Hyde Square' />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.section}>
          <Typography align='center' variant='h5' color='primary'>
            <Room className={classes.icon} />
            Huntington Avenue
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.section}>
          <Typography align='center' variant='h5' color='primary'>
            <Commute className={classes.icon} />
            Complete Streets
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.section}>
          <Typography align='center' variant='h5' color='primary'>
            <Eco className={classes.icon} />
            Environmental Justice
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
