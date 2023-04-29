import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      minWidth: 400,
    },
    title: {
      fontWeight: 900,
    },
    footerWrap: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    pageWrap: {
      margin: "auto",
      maxWidth: "30%",
      padding: "20px",
    },
  })
);

export default useStyles;
