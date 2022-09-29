import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Navigation } from '../../components';

const DefaultLayout = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = open => {
    setShowDrawer(open);
  };
  return (
    <>
      <Navigation open={showDrawer} onClose={toggleDrawer}></Navigation>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokemon
            </Typography>
            <GitHubIcon />
          </Toolbar>
        </AppBar>
      </Box>
      <div>{children}</div>
    </>
  );
};

export default DefaultLayout;
