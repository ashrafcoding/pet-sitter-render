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
  loginOuterContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  loginContainer: {
    padding: theme.spacing(5, 15),
    borderRadius: theme.shape.borderRadius,
    height: "700px",
    [theme.breakpoints.down(768)]: {
      padding: theme.spacing(5),
    },
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: "#000000",
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: "center",
  },
}));

export default useStyles;
