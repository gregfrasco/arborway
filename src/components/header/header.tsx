import React, { FC } from 'react';
import { AppBar, Button, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { Close, EmailOutlined, Facebook, Menu, Twitter } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Urls } from '../../constants/urls';
import { Link } from '@reach/router';

const logo = require('../../assets/logo.png');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  socialButton: {
    marginRight: theme.spacing(1)
  },
  titleContainer: {
    flexGrow: 1
  },
  title: {
    fontWeight: 'bold'
  },
  menuButtons: {
    textTransform: 'none'
  },
  spacing: {
    marginBottom: theme.spacing(2)
  },
  image: {
    maxWidth: theme.spacing(10),
    marginRight: theme.spacing(2)
  }
}));

const links = [
  {
    name: 'Home',
    url: Urls.HOME
  },
  {
    name: 'Hyde Square',
    url: Urls.HYDE_SQUARE
  },
  {
    name: 'Support',
    url: Urls.SUPPORT
  },
  {
    name: 'FAQ',
    url: Urls.FAQ
  },
  {
    name: 'About Us',
    url: Urls.ABOUT_US
  },
  {
    name: 'Other Projects',
    url: Urls.OTHER_PROJECTS
  },
  {
    name: 'Archive',
    url: Urls.ARCHIVE
  },
  {
    name: 'Contact Us',
    url: Urls.CONTACT_US
  }
];

const Header: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <AppBar position='relative' className={classes.spacing}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton aria-label='open drawer'>
              <Menu color='secondary' onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <img className={classes.image} src={logo} alt='Arborway Committee Logo' />
          </Hidden>
          <Grid className={classes.titleContainer}>
            <Typography variant='h6' className={classes.title}>
              The Arborway Committee for Public Transit, Inc.
            </Typography>
            <Hidden smDown>
              <Typography variant='subtitle1' className={classes.title}>
                Put the "E" in urban transit: Environment, Economy, Equity!
              </Typography>
            </Hidden>
          </Grid>
          <Hidden smDown>
            <IconButton aria-label='facebook' className={classes.socialButton} style={{ background: '#4267B2' }}>
              <Facebook fontSize='inherit' style={{ color: '#FFFFFF' }} />
            </IconButton>
            <IconButton aria-label='twitter' className={classes.socialButton} style={{ background: '#1DA1F2' }}>
              <Twitter fontSize='inherit' style={{ color: '#FFFFFF' }} />
            </IconButton>
            <IconButton aria-label='email' className={classes.socialButton} style={{ background: '#FFFFFF' }}>
              <EmailOutlined fontSize='inherit' />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden smDown>
          <Toolbar>
            {links.map((link) => (
              <Button component={Link} className={classes.menuButtons} to={link.url} color='secondary'>
                {link.name}
              </Button>
            ))}
            <Button component={Link} to={Urls.DONATE} className={classes.menuButtons} variant='contained' color='secondary'>
              Donate
            </Button>
          </Toolbar>
        </Hidden>
        <Hidden mdUp>
          <Drawer open={open} anchor='left'>
            <AppBar position='relative' className={classes.spacing}>
              <Toolbar>
                <img className={classes.image} src={logo} alt='Arborway Committee Logo' />
                <IconButton onClick={() => setOpen(false)}>
                  <Close color='secondary' />
                </IconButton>
              </Toolbar>
            </AppBar>
            <List component='nav'>
              {links.map((link) => (
                <ListItem component={Link} button to={link.url} onClick={() => setOpen(false)}>
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
              <Divider />
              <ListItem>
                <Button
                  component={Link}
                  to={Urls.DONATE}
                  className={classes.menuButtons}
                  variant='contained'
                  color='primary'
                  disableRipple
                  onClick={() => setOpen(false)}>
                  Donate
                </Button>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <Facebook htmlColor={'#4267B2'} />
                </ListItemIcon>
                <ListItemText primary='Facebook' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Twitter htmlColor={'#1DA1F2'} />
                </ListItemIcon>
                <ListItemText primary='Twitter' />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </AppBar>
    </>
  );
};

export { Header };
