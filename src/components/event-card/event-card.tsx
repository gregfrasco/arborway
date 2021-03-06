import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Event } from './event';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    display: 'flex',
    flexGrow: 1,
    marginLeft: spacing(4)
  },
  cardDetails: {
    flex: 1
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  title: {
    marginLeft: spacing(1)
  }
}));

const EventCard: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant='outlined'>
      <div className={classes.cardDetails}>
        <CardContent>
          <Box className={classes.iconContainer}>
            <EventIcon />
            <Typography component='h2' variant='h5' className={classes.title}>
              Events
            </Typography>
          </Box>
          <Event
            title='Join the Arborway Committee for Public Transit, Inc. (ACPT) in welcoming Jarred Johnson, Director of TransitMatters, as Guest Speaker at our 2020 Annual Meeting.'
            date={new Date('12/10/2020 7:00 PM')}
          />
          <Event
            title='Join the Arborway Committee for Public Transit, Inc. (ACPT) in welcoming Jarred Johnson, Director of TransitMatters, as Guest Speaker at our 2020 Annual Meeting.'
            date={new Date('12/10/2020 7:00 PM')}
          />
        </CardContent>
      </div>
    </Card>
  );
};

export { EventCard };
