import React, { FC } from 'react';
import { Avatar, createStyles, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    item: {},
    large: {
      marginTop: theme.spacing(1),
      fontSize: '80px',
      width: 'auto',
      height: 'auto'
    }
  })
);

interface ProfileProps {
  image: string;
  imageAlt: string;
}

const Profile: FC<ProfileProps> = ({ image, imageAlt, children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={2}>
        <Avatar alt={imageAlt} src={image} className={classes.large} />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export { Profile };
