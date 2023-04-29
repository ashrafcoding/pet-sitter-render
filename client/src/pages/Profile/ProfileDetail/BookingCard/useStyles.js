import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      "& .MuiPaper-rounded": {
        borderRadius: 0,
      },
    },
  },
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
    alignItems: "center",
  },
  hourlyWage: {
    fontWeight: 700,
    padding: theme.spacing(2),
  },
  rating: {
    padding: theme.spacing(0, 0, 1),
  },
  label: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
  inputField: {
    padding: theme.spacing(1, 0),
  },
  submit: {
    textTransform: "uppercase",
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(2, "auto", 3),
    width: "180px",
    height: "50px",
  },
  dateRangeIcon: {
    color: "#aaa",
    marginRight: theme.spacing(1),
  },
  hourInput: {
    width: "160px",
  },
}));

export default useStyles;
