import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Divider, Typography } from '@material-ui/core';
import { Event } from './event';
import EventIcon from '@material-ui/icons/Event';
import { useEvents } from '../../hooks/useEvents';

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
  const { events, loading } = useEvents();
  return (
    <Card className={classes.card} variant='outlined'>
      <div className={classes.cardDetails}>
        <CardContent>
          <Box className={classes.iconContainer}>
            <EventIcon />
            <Typography component='h2' variant='h5' className={classes.title}>
              Announcements
            </Typography>
          </Box>
          {events.map((event, i) => (
            <>
              <Event key={i} title={event.title} date={event.date} link={event.link} linkTitle={event.linkTitle} loading={loading} />
              {events.length - 1 != i && <Divider />}
            </>
          ))}
        </CardContent>
      </div>
    </Card>
  );
};

export { EventCard };
