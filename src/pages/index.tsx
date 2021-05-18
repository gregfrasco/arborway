import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Commute, Eco, FlashOnRounded } from '@material-ui/icons';
import { MainFeatureCard } from 'components/main-feature-card/main-feature-card';

import Welcome from '../content/home/welcome.mdx';
import Mission from '../content/home/mission.mdx';
import CompleteStreets from '../content/home/complete-streets.mdx';
import { ImageCard } from 'components/image-card/image-card';
import { EventCard } from 'components/event-card/event-card';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'components/modal/modal';
import { ModalNames } from '../constants/modal-names';
import { useModal } from '../hooks/useModal';

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
  const { openModal } = useModal();
  return (
    <Container>
      <MainFeatureCard image={greenline} imageText='Hero Image' />
      <Grid container>
        <Grid item xs={12} md={6} className={classes.section}>
          <Welcome />
          <Button variant='contained' color='primary' size='medium' className={classes.button}>
            Read our mission statement
          </Button>
        </Grid>
        <Grid item justify='center' xs={12} md={6} className={classes.section}>
          <EventCard />
        </Grid>
        <Grid item xs={12} md={6} className={classes.section}>
          <Mission />
          <Button variant='contained' color='primary' size='medium' style={{ marginTop: 15 }}>
            Learn More about Hyde Square
          </Button>
        </Grid>
        <Grid container item justify='center' xs={12} md={6} className={classes.section}>
          <ImageCard image={ELineStops} description='Green Line Extension to Hyde Square' />
        </Grid>
        <Grid container item justify='center' xs={12} md={4} lg={4} className={classes.section}>
          <Button size='large' color='primary' startIcon={<FlashOnRounded className={classes.icon} />}>
            <div>
              <Typography align='center' variant='h6' color='primary'>
                Transit Vehicle Electrification
              </Typography>
              <Typography align='center' variant='body1' color='textPrimary'>
                Click here to learn more
              </Typography>
            </div>
          </Button>
        </Grid>
        <Grid container item justify='center' xs={12} md={4} lg={4} className={classes.section}>
          <Button size='large' color='primary' startIcon={<Commute className={classes.icon} />} onClick={() => openModal(ModalNames.COMPLETE_STREETS)}>
            <div>
              <Typography align='center' variant='h6' color='primary'>
                Complete Streets
              </Typography>
              <Typography align='center' variant='body1' color='textPrimary'>
                Click here to learn more
              </Typography>
            </div>
          </Button>
        </Grid>
        <Grid container item justify='center' xs={12} md={4} lg={4} className={classes.section}>
          <Button size='large' color='primary' startIcon={<Eco className={classes.icon} />}>
            <div>
              <Typography align='center' variant='h6' color='primary'>
                Environmental Justice
              </Typography>
              <Typography align='center' variant='body1' color='textPrimary'>
                Click here to learn more
              </Typography>
            </div>
          </Button>
        </Grid>
      </Grid>
      <Modal name={ModalNames.COMPLETE_STREETS} title='Complete Streets'>
        <CompleteStreets />
      </Modal>
    </Container>
  );
};
