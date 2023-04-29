import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: "100vh",
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)",
    },
  },
  authWrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    minHeight: "100vh",
    paddingTop: 23,
  },
  welcome: {
    fontSize: 40,
    paddingBottom: 20,
    color: "#000000",
    fontWeight: 900,
    fontFamily: "'Open Sans'",
  },
  logoWrapper: {
    marginLeft: "30px",
  },
  landingWrapper: {
    height: "100%",
  },
}));

export default useStyles;
