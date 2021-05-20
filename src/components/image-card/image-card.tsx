import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CSS from 'csstype';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardMedia: {
    flexGrow: 1
  }
}));

interface ImageCardProps {
  image: string;
  description?: string;
  style?: CSS.Properties;
}

const ImageCard: FC<ImageCardProps> = ({ image, description, style }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.container}>
      <Card variant='outlined'>
        <CardMedia component='img' className={classes.cardMedia} image={image} title={description} style={style} />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { ImageCard };
