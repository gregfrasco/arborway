import React, { FC } from 'react';
import { Button, CardActions, Grid, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import format from 'date-fns/format';

interface EventProps {
  title: string;
  date: Date;
}

const useStyles = makeStyles({
  container: {
    flex: 1
  },
  dateContainer: {
    marginRight: 10,
    flex: 1
  },
  date: {
    textAlign: 'center',
    fontSize: 28
  },
  month: {
    color: '#333',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  time: {
    color: '#333',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  eventContainer: {
    flex: 5,
    alignItems: 'end',
    flexDirection: 'row'
  },
  eventButton: {
    flex: 1,
    textTransform: 'none'
  }
});

const Event: FC<EventProps> = ({ date }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem className={classes.container}>
        <Grid className={classes.dateContainer}>
          <Typography className={classes.date}>{format(date, 'do')}</Typography>
          <Typography className={classes.month}>{format(date, 'LLL')}</Typography>
          <Typography className={classes.time}>{format(date, 'h:mm a')}</Typography>
        </Grid>
        <div className={classes.eventContainer}>
          <ListItemText
            primary='Join the Arborway Committee for Public Transit, Inc. (ACPT) in welcoming Jarred Johnson, Director of TransitMatters, as Guest Speaker at our 2020 Annual Meeting.
'
          />
        </div>
      </ListItem>
      <CardActions>
        <Button className={classes.eventButton} variant='outlined'>
          Learn More
        </Button>
        <Button className={classes.eventButton} variant='contained' color='primary'>
          Join Zoom Meeting
        </Button>
      </CardActions>
    </>
  );
};

export { Event };
