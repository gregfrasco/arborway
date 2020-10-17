import React, { FC } from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

interface FeatureCardProps {
  title: string;
  image: string;
  imageText: string;
  description: string;
  linkText: string;
  link: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ title = 'test', image, imageText, description, linkText, link }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={image} alt={imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component='h1' variant='h3' color='inherit' gutterBottom>
              {title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {description}
            </Typography>
            <Button href={link} target='_blank' variant='contained' color='primary'>
              {linkText}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export { FeatureCard };
