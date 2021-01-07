import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Event } from './event';

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    display: 'flex',
    flexGrow: 1,
    marginLeft: spacing(4)
  },
  cardDetails: {
    flex: 1
  }
}));

const EventCard: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant='outlined'>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography component='h2' variant='h5'>
            Events
            <Event title='Test' date={new Date('12/10/2020 7:00 PM')} />
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export { EventCard };
