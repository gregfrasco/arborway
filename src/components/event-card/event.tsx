import React, { FC, Fragment } from 'react';
import { Box, Button, CardActions, Grid, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import format from 'date-fns/format';
import { Link } from '@reach/router';
import { Skeleton } from '@material-ui/lab';

interface EventProps {
  title?: string;
  date?: Date;
  linkTitle?: string;
  link?: string;
}

interface LoadingProps {
  loading: boolean;
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

const Event: FC<EventProps & LoadingProps> = ({ title, date, linkTitle, link, loading }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem className={classes.container}>
        {!loading && date && (
          <Grid className={classes.dateContainer}>
            {loading && (
              <Fragment>
                <Typography className={classes.date}>
                  <Skeleton />
                </Typography>
                <Typography className={classes.month}>
                  <Skeleton />
                </Typography>
                <Typography className={classes.time}>
                  <Skeleton />
                </Typography>
              </Fragment>
            )}
            {!loading && date && (
              <Fragment>
                <Typography className={classes.date}>{format(date, 'do')}</Typography>
                <Typography className={classes.month}>{format(date, 'LLL')}</Typography>
                <Typography className={classes.time}>{format(date, 'h:mm a')}</Typography>
              </Fragment>
            )}
          </Grid>
        )}
        <Box className={classes.eventContainer}>
          {loading && (
            <Fragment>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Fragment>
          )}
          {!loading && <ListItemText primary={title} />}
        </Box>
      </ListItem>
      {link && linkTitle && (
        <CardActions>
          <Button className={classes.eventButton} variant='contained' color='primary' component={Link} to={link}>
            {linkTitle}
          </Button>
        </CardActions>
      )}
    </>
  );
};

export { Event, EventProps };
