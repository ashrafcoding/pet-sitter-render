import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useAuth } from "../../context/useAuthContext";
import useStyles from "./useStyles";
import DemoUserLogin from "../DemoUserLogin/DemoUserLogin";
import AvatarDisplay from "../AvatarDisplay/AvatarDisplay";

const AuthMenu = ()=> {
  const {classes} = useStyles();
  const history = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { loggedInUser, logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleMenu = (linkTo) => {
    handleClose();
    history(linkTo);
  };

  return (
    <Box
      className={`${classes.authMobileMenus} ${
        loggedInUser && classes.displayAuthMenus
      }`}
    >
      <IconButton
        aria-label="show auth menu"
        aria-controls="auth-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {location.pathname === "/login" || location.pathname === "/signup" ? (
          <MoreHorizIcon />
        ) : (
          <AvatarDisplay loggedIn user={loggedInUser} />
        )}
      </IconButton>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        // getContentAnchorEl={null}
      >
        {loggedInUser ? (
          <Box>
            <MenuItem
              className={`${classes.menuItem} ${classes.menuItemDesktop}`}
              onClick={() => handleMenu("/listings")}
            >
              Listings
            </MenuItem>
            <MenuItem
              className={`${classes.menuItem} ${classes.menuItemDesktop}`}
              onClick={() => handleMenu("/bookings")}
            >
              Bookings
            </MenuItem>
            <MenuItem
              className={`${classes.menuItem} ${classes.menuItemDesktop}`}
              onClick={() => handleMenu("/messages")}
            >
              Messages
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={() => handleMenu("/profile")}
            >
              Profile
            </MenuItem>
            <MenuItem 
            className={classes.menuItem} 
            onClick={handleLogout}>
              Logout
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <DemoUserLogin isMenuItem 
            classes={classes.menuItem} 
            />
            <MenuItem
              className={classes.menuItem}
              onClick={() => handleMenu("/login")}
            >
              Login
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={() => handleMenu("/signup")}
            >
              Sign Up
            </MenuItem>
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default AuthMenu;
