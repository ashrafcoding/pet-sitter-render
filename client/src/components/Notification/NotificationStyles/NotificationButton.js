import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  authNavItemBtn: {
    fontSize: 16,
    color: "#000000 !important",
    fontWeight: 900,
    textDecoration: "none",
  },
  authNavMobile: {
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
  popoverWrap: {
    minWidth: "700px",
  },
  wrap: {
    marginRight: "35px !important",
  },
}));

export default useStyles;
