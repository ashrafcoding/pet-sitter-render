import { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListIcon from "@mui/icons-material/List";
import useStyles from "./useStyles";

const sideBarMenus = [
  { menuItem: "Edit Profile", linkTo: "/profile/edit" },
  { menuItem: "Profile Photo", linkTo: "/profile/photo" },
  { menuItem: "Availability", linkTo: "/profile/availability" },
  { menuItem: "Payment", linkTo: "/profile/payment" },
  { menuItem: "Security", linkTo: "/profile/security" },
  { menuItem: "Settings", linkTo: "/profile/settings" },
];

const ProfileSideBar = () => {
  const {classes} = useStyles();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleDrawer =
    (open) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event).key === "Tab" ||
          (event).key === "Shift")
      ) {
        return;
      }
      setSideBarOpen(open);
    };

  const menuList = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.menuList}>
        {sideBarMenus.map((menu, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={menu.linkTo}
            className={classes.activeMenu}
          >
            {menu.menuItem}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Grid item sm={3} className={classes.sideBarDesktop}>
        {menuList}
      </Grid>
      <Box className={classes.sideBarMobile}>
        <Button className={classes.profileMenuBtn} onClick={toggleDrawer(true)}>
          <ListIcon />
          Profile Menus
        </Button>
        <SwipeableDrawer
          className={classes.profileSideBar}
          open={sideBarOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {menuList}
        </SwipeableDrawer>
      </Box>
    </>
  );
};

export default ProfileSideBar;
