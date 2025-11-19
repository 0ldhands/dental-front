import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: '#1E2A36' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: 'white' }}>
        MY Tooth Tales
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white', margin: '0 10px' }}>Home</Button>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white', margin: '0 10px' }}>Services</Button>
          </Link>
          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white', margin: '0 10px' }}>About Us</Button>
          </Link>
          <Link to="/blog" style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white', margin: '0 10px' }}>Blog</Button>
          </Link>
          <Link to="/contact-us" style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white', margin: '0 10px' }}>Contact Us</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
