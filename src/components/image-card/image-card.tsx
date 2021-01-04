import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    alignItems: 'stretch'
  },
  cardMedia: {
    flexGrow: 1
  }
}));

interface ImageCardProps {
  image: string;
  description: string;
}

const ImageCard: FC<ImageCardProps> = ({ image, description }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={5} md={4} className={classes.container}>
      <Card variant='outlined' className={classes.card}>
        <CardMedia component='img' className={classes.cardMedia} image={image} title='Image title' />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { ImageCard };
