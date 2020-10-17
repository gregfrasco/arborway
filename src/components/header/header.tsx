import React, { FC } from 'react';
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Menu, EmailOutlined, Facebook, Twitter, Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  socialButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
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
    url: '/'
  },
  {
    name: 'Hyde Square',
    url: '/'
  },
  {
    name: 'Support',
    url: '/'
  },
  {
    name: 'FAQ',
    url: '/'
  },
  {
    name: 'About Us',
    url: '/about-us'
  },
  {
    name: 'Other Projects',
    url: '/'
  },
  {
    name: 'Contact Us',
    url: '/'
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
            <img className={classes.image} src={logo} alt="Arborway Committee Logo" />
          </Hidden>
          <Typography variant='h6' className={classes.title}>
            The Arborway Committee for Public Transit, Inc.
          </Typography>
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
              <Button className={classes.menuButtons} href={link.url} color='secondary'>
                {link.name}
              </Button>
            ))}
            <Button className={classes.menuButtons} variant='contained' color='secondary'>
              Donate
            </Button>
          </Toolbar>
        </Hidden>
        <Hidden mdUp>
          <Drawer open={open} anchor='left'>
            <AppBar position='relative' className={classes.spacing}>
              <Toolbar>
                <img className={classes.image} src={logo} alt="Arborway Committee Logo" />
                <IconButton onClick={() => setOpen(false)}>
                  <Close color='secondary' />
                </IconButton>
              </Toolbar>
            </AppBar>
            <List component='nav'>
              {links.map((link) => (
                <ListItem button href={link.url}>
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
              <Divider />
              <ListItem button href='/donate'>
                <Button className={classes.menuButtons} variant='contained' color='primary' disableRipple>
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
