import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

interface FeaturedCardProps {
  title: string;
  description: string;
  date?: string;
  image: string;
  imageTitle: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ title, description, image, imageTitle, date }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {date}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {description}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={image} title={imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export { FeaturedCard };
