import { makeStyles } from "tss-react/mui";

const landingFormStyle = makeStyles()((theme) => ({
  bookingBox: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 3, 3, 0),
    },
  },
  bookingContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  bookingForm: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  label: {
    fontWeight: 900,
    textTransform: "uppercase",
  },
  inputField: {
    [theme.breakpoints.between(426, 1440)]: {
      flexDirection: "row",
      height: "170px",
      justifyContent: "space-between",
    },
  },
  dateInputWrapper: {
    display: "flex",
  },
  submit: {
    textTransform: "uppercase",
    backgroundColor: "#f04040 !important",
    marginTop: "20px !important",
    width: "180px",
    height: "50px",
    fontSize: "11px !important",
  },
  dateRangeIcon: {
    color: "#aaa",
    marginRight: theme.spacing(1),
  },
  errorHelperText: {
    color: "red !important",
    margin: "0 0 8px !important",
  },
}));

export default landingFormStyle;
