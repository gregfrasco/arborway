import React, { FC } from 'react';
import { Button, Grid, ListItem, ListItemText, Typography } from '@material-ui/core';
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
    flex: 1
  }
});

const Event: FC<EventProps> = ({ date }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.container}>
      <Grid className={classes.dateContainer}>
        <Typography className={classes.date}>{format(date, 'd')}</Typography>
        <Typography className={classes.month}>{format(date, 'LLL')}</Typography>
        <Typography className={classes.time}>{format(date, 'h:mm a')}</Typography>
      </Grid>
      <div className={classes.eventContainer}>
        <ListItemText primary='Join our annual meeting' />
        <Button className={classes.eventButton} variant='outlined'>
          Join Zoom Meeting
        </Button>
      </div>
    </ListItem>
  );
};

export { Event };
