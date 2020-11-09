import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Event } from './event';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  }
});

const EventCard: FC = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card} variant='outlined'>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component='h2' variant='h5'>
              Events
              <Event title='Test' date={new Date()} />
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

export { EventCard };
