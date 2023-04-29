import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  activeChatHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 125,
    paddingRight: theme.spacing(3),
    borderBottom: "1px solid #eee",
    [theme.breakpoints.down("sm")]: {
      height: "82px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  mobileActiveChatHeader: {
    backgroundColor: "#fff",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
  },
  username: {
    textTransform: "capitalize",
    fontWeight: 700,
    margin: theme.spacing(0, 1.5),
    [theme.breakpoints.down("sm")]: {
      color: "black",
    },
  },
  ellipsis: {
    color: "#0a0a0a",
    marginRight: theme.spacing(3),
    opacity: 0.5,
  },
}));

export default useStyles;
