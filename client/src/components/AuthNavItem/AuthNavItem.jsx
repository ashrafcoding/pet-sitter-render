import { NavLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";


const AuthNavItem = ({
  isButton,
  linkTo,
  classes,
  asideText,
  btnText,
  variant,
}) => {
  return (
    <>
      {isButton ? (
        <Button
          component={NavLink}
          to={linkTo}
          className={classes}
          activestyle={
            variant === "contained"
              ? { color: "#ffffff" }
              : { color: "#f04040" }
          }
          color="primary"
          variant={variant}
        >
          {btnText}
        </Button>
      ) : (
        <Typography
          className={classes}
          component={NavLink}
          to={linkTo}
          activestyle={{ color: "#f04040" }}
        >
          {asideText}
        </Typography>
      )}
    </>
  );
};

export default AuthNavItem;
