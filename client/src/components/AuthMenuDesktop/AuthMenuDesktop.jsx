import { Box } from "@mui/material";
import { useAuth } from "../../context/useAuthContext";
import useStyles from "./useStyles";
import AuthNavItem from "../AuthNavItem/AuthNavItem";
import NotificationButton from "../Notification/NotificationButton";


const AuthMenuDesktop = ({
  asideText,
  linkTo,
  notifCount,
  updateCount,
}) => {
  const {classes} = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.authMenuDesktop}
    >
      <AuthNavItem
        asideText={asideText}
        classes={`${classes.accAside} ${classes.authNavMobile}`}
        linkTo={linkTo}
      />
      {loggedInUser ? (
        <>
          <NotificationButton
            notifCount={notifCount}
            updateCount={updateCount}
          />
          <AuthNavItem
            isButton
            classes={`${classes.authNavItemBtn} ${classes.authNavMobile}`}
            linkTo="/bookings"
            btnText="Bookings"
            variant="text"
          />
          <AuthNavItem
            isButton
            classes={`${classes.authNavItemBtn} ${classes.authNavMobile}`}
            linkTo="/listings"
            btnText="Listings"
            variant="text"
          />
          {loggedInUser.profileId && (
            <AuthNavItem
              isButton
              classes={`${classes.authNavItemBtn} ${classes.authNavMobile}`}
              linkTo="/messages"
              btnText="Messages"
              variant="text"
            />
          )}
        </>
      ) : (
        <>
          <AuthNavItem
            isButton
            classes={`${classes.headerBtn} ${classes.loginBtn}`}
            linkTo="/login"
            btnText="Login"
            variant="outlined"
          />
          <AuthNavItem
            isButton
            classes={`${classes.headerBtn} ${classes.signupBtn}`}
            linkTo="/signup"
            btnText="Sign Up"
            variant="contained"
          />
        </>
      )}
    </Box>
  );
};

export default AuthMenuDesktop;
