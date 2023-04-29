import { makeStyles } from "tss-react/mui";

const nextBookingClasses = makeStyles()((theme) => ({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    wrapper: {
      textAlign: "left",
      marginBottom: "15px",
    },
    sectionHr: {
      fontWeight: 900,
      fontSize: "9px",
      color: theme.palette.text.primary,
      marginBottom: "10px",
      marginTop: "10px",
      textTransform: "uppercase",
    },
    nextBookSubHr: {
      fontWeight: 600,
      fontSize: "16px",
      color: theme.palette.text.primary,
    },
    nextBookNameHr: {
      fontWeight: 900,
      fontSize: "13px",
      color: theme.palette.text.primary,
    },
    nextBookNameWrapper: {
      display: "flex",
      marginBottom: "15px",
    },
    tempImg: {
      borderRadius: "50%",
      width: "20px",
      marginRight: "10px",
      backgroundColor: theme.palette.background.default,
    },
    icon: {
      fontSize: "15px",
      color: theme.palette.text.secondary,
    },
  })
);

export default nextBookingClasses
