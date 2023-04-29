import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  chatSideBanner: {
    height: "100%",
    borderRight: "1px solid #eee",
    [theme.breakpoints.down("xs")]: {
      border: "none",
    },
  },
  chatSideBannerBox: {
    padding: theme.spacing(2),
    borderBottom: "1px solid #eee",
    [theme.breakpoints.down("xs")]: {
      border: "none",
    },
  },
  inboxMessages: {
    fontWeight: 700,
    margin: theme.spacing(0, 0, 2, 0.5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
