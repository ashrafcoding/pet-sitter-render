import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) =>({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      minWidth: 400,
    },
    image: {
      width: 60,
      height: 60,
    },
    title: {
      fontWeight: 900,
    },
    footerWrap: {
      display: "flex",
      justifyContent: "flex-end",
    },
    popoverWrap: {
      minWidth: "450px",
    },
  })
);

export default useStyles;
