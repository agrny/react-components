import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Dummy pages for demonstration
const Page1 = () => <div>Page 1</div>;
const Page2 = () => <div>Page 2</div>;
const Page3 = () => <div>Page 3</div>;

const allPages = ['Page1', 'Page2', 'Page3']

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {allPages.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {location.pathname === `/${text}` ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {/* Use Link to navigate directly */}
              <Link to={`/${text}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Router>
      <div>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
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

