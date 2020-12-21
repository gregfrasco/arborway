import React, { FC } from 'react';

import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from '@reach/router';
import { Copyright } from '../copyright/copyright';
import { makeStyles } from '@material-ui/core/styles';
import { Urls } from '../../constants/urls';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  },
  footer: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const footers = [
  {
    title: 'Initiatives',
    links: [
      {
        title: 'Hyde Square',
        link: Urls.HYDE_SQUARE
      },
      {
        title: 'Other projects',
        link: Urls.OTHER_PROJECTS
      }
    ]
  },
  {
    title: 'Useful Links',
    links: [
      {
        title: 'About Us',
        link: Urls.ABOUT_US
      },
      {
        title: 'FAQ',
        link: Urls.FAQ
      },
      {
        title: 'Archive',
        link: Urls.ARCHIVE
      }
    ]
  },
  {
    title: 'Contact Us',
    links: [
      {
        title: 'Donate',
        link: Urls.DONATE
      },
      {
        title: 'Contact Us',
        link: Urls.CONTACT_US
      }
    ]
  }
];

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container component='footer' className={classes.footer}>
        <Grid container>
          {footers.map((footer) => (
            <Grid item xs={6} sm={4} key={footer.title}>
              <Typography variant='h6' color='textPrimary' gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.links.map((item) => (
                  <li key={item.title}>
                    <Link component={RouterLink} to={item.link} variant='subtitle1' color='textSecondary'>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export { Footer };
