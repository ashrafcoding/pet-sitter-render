import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  authNavItemBtn: {
    fontSize: 16,
    color: "#000000",
    fontWeight: 900,
    marginRight: 35,
    textDecoration: "none",
  },
  authNavMobile: {
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
}));

export default useStyles;
