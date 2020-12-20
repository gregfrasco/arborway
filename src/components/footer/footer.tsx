import React, { FC } from 'react';

import logo from '../../assets/logo.png';
import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import { Copyright } from '../copyright/copyright';
import { makeStyles } from '@material-ui/core/styles';
import { UrlLinks } from '../../constants/urls';

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
        link: UrlLinks.HYDE_SQUARE
      },
      {
        title: 'Other projects',
        link: UrlLinks.OTHER_PROJECTS
      }
    ]
  },
  {
    title: 'Useful Links',
    links: [
      {
        title: 'About Us',
        link: UrlLinks.ABOUT_US
      },
      {
        title: 'FAQ',
        link: UrlLinks.FAQ
      },
      {
        title: 'Archive',
        link: UrlLinks.ARCHIVE
      }
    ]
  },
  {
    title: 'Contact Us',
    links: [
      {
        title: 'Donate',
        link: UrlLinks.DONATE
      },
      {
        title: 'Email',
        link: UrlLinks.HYDE_SQUARE
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
                    <Link href={item.link} variant='subtitle1' color='textSecondary'>
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
