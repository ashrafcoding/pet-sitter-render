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
    image: {
      width: 60,
      height: 60,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    title: {
      fontWeight: 900,
    },
    type: {
      fontSize: "10px",
      color: "light-grey",
    },
    date: {
      fontWeight: 900,
    },
    unread: {
      backgroundColor: "lightgrey",
      marginBottom: "10px",
    },
    read: {
      backgroundColor: "white",
      marginBottom: "10px",
    },
  })
);

export default useStyles;
