import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    mt: {
      marginTop: "20px",
    },
    container: {
      backgroundColor: "rgb(250,250,251)",
      // padding: "10px",
      height: "100vh",
    },
    calendarWrap: {
      height: "100%",
    },
  })
);

export default useStyles;
