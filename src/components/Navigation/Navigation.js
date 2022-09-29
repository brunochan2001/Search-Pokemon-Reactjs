import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import './style.css';

const Navigation = ({ children, open, onClose }) => {
  return (
    <Drawer open={open} anchor="left" onClose={() => onClose(false)}>
      <Box pt={1}>
        <List>
          <Link to="/" className="link-navigation">
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <Typography variant="body1">Buscar Pokemon</Typography>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/Reportes" className="link-navigation">
            <ListItem key={2} disablePadding>
              <ListItemButton>
                <Typography variant="body1">Reporte</Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};

export default Navigation;
