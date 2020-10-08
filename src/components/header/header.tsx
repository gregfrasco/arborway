import React, { FC } from 'react';
import { AppBar, Button, Drawer, IconButton, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Menu, EmailOutlined, Facebook, Twitter } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

const Header: FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          {sm && (
            <IconButton aria-label='open drawer'>
              <Menu color='secondary' />
            </IconButton>
          )}
          <Typography variant='h6' className={classes.title}>
            The Arborway Committee for Public Transit, Inc.
          </Typography>
          {!sm && (
            <>
              <IconButton aria-label='facebook' className={classes.socialButton} style={{ background: '#4267B2' }}>
                <Facebook fontSize='inherit' style={{ color: '#FFFFFF' }} />
              </IconButton>
              <IconButton aria-label='twitter' className={classes.socialButton} style={{ background: '#1DA1F2' }}>
                <Twitter fontSize='inherit' style={{ color: '#FFFFFF' }} />
              </IconButton>
              <IconButton aria-label='email' className={classes.socialButton} style={{ background: '#FFFFFF' }}>
                <EmailOutlined fontSize='inherit' />
              </IconButton>
            </>
          )}
        </Toolbar>
        {!sm && (
          <Toolbar>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              Home
            </Button>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              Hyde Square
            </Button>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              Support
            </Button>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              FAQ
            </Button>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              About Us
            </Button>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              Other Projects
            </Button>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              Contact Us
            </Button>
            <Button className={classes.menuButtons} href='#text-buttons' color='secondary'>
              Donate
            </Button>
          </Toolbar>
        )}
        <Drawer open={open}>
          <ListItem>
            <ListItemText />
          </ListItem>
        </Drawer>
      </AppBar>
    </>
  );
};

export { Header };
