import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  authMobileMenus: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  displayAuthMenus: {
    display: "block",
  },
  menuItem: {
    textTransform: "uppercase",
    justifyContent: "center",
  },
  menuItemDesktop: {
    [theme.breakpoints.up(768)]: {
      display: "none",
    },
  },
}));

export default useStyles;
