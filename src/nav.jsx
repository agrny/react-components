import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
import IconButton from '@mui/material/IconButton'; // For the button
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

// Dummy pages for demonstration

export default function NavBarRouter() {
  const Page1 = () => <div>Page 1</div>;
  const Page2 = () => <div>Page 2</div>;
  const Page3 = () => <div>Page 3</div>;

  const allPages = ['Page1', 'Page2', 'Page3']
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  const DrawerList = (
    <Box sx={{ width: isMobile ? '100%' : 250, padding: isMobile ? 2 : 0 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {allPages.map((text) => (
          <ListItem key={text} disablePadding>
            <Link to={`/${text}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              onClick={() => setOpen(false)}>
              <ListItemButton>
                <ListItemIcon>
                  {location.pathname === `/${text}` ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {/* Use Link to navigate directly */}
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Router>
      <div>
        {/* Hamburger Button in Upper Left Corner */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ position: 'absolute', top: 10, left: 10 }} // Position it in the upper left corner
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor={isMobile ? 'top' : 'left'}>
          {DrawerList}
        </Drawer>

        <div style={{ marginTop: '20px' }}>
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<div>Welcome! Select a page from the menu.</div>} />
            <Route path="/Page1" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/Page3" element={<Page3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

