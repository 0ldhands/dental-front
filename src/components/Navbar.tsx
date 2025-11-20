import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

const toggleDrawer =
  (state: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(state);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About Us", path: "/about-us" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#1E2A36" }}>
        <Toolbar>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "white", fontWeight: 600 }}
          >
            MY Tooth Tales
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white", mx: 1 }}>{link.title}</Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: "#1E2A36", height: "100%", color: "white" }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding>
                <ListItemButton
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to={link.path}
                >
                  <ListItemText primary={link.title} sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
