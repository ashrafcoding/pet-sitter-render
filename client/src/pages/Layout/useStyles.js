import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: "100vh",
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)",
      width: "99%",
      margin: "0 auto",
    },
  },
  layout: {
    backgroundColor: "#FFFFFF",
  },
  layoutOuterContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  layoutContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
