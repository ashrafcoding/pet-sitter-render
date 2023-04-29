import { makeStyles} from "tss-react/mui";
import { red } from "@mui/material/colors";

const bookingTemplate = makeStyles()((theme) =>({
    red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
    },
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
    text: {
      textAlign: "left",
    },
    sectionHr: {
      fontWeight: 900,
      fontSize: "9px",
      color: theme.palette.text.primary,
      marginTop: "8px",
      textTransform: "uppercase",
    },
    sectionWrapper: {
      marginBottom: "-10px",
    },
    BookingSubHr: {
      fontWeight: 600,
      fontSize: "12px",
      color: theme.palette.text.primary,
      margin: "10px 0px",
    },
    bookingNameHr: {
      fontWeight: 700,
      marginLeft: "8px",
      fontSize: "13px",
    },
    nameWrapper: {
      display: "flex",
      marginBottom: "15px",
      alignItems: "center",
    },
    tempImg: {
      borderRadius: "50%",
      width: "20px",
      marginRight: "10px",
      backgroundColor: theme.palette.background.default,
    },
    paperOutlineWrap: {
      marginBottom: "7px",
      padding: "5px 10px",
    },
    iconWrapper: {
      display: "flex",
      justifyContent: "flex-end",
    },
    statusWrapper: {
      display: "flex",
      alignItems: "center",
      fontSize: "8px",
      fontWeigth: "900",
    },
    statusTxt: {
      fontSize: "10px",
      color: theme.palette.text.secondary,
      fontWeight: 900,
    },
  })
);

export default bookingTemplate;

