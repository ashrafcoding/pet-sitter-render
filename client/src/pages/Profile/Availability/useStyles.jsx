import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  itemWrap: {
    width: "100%",
  },
  listWrap: {
    width: "70%",
    margin: "auto",
  },
  dates: {
    width: "40%",
  },
  m5: {
    marginRight: "20px",
  },
  bookingForm: {
    padding: theme.spacing(2),
  },
  label: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
  submit: {
    textTransform: "uppercase",
    backgroundColor: "#f04040 !important",
    margin: theme.spacing(2, "auto", 3),
    width: "180px",
    height: "50px",
    marginTop: "60px  !important",
  },
  hourInput: {
    width: "160px",
    [theme.breakpoints.between(426, 1440)]: {
      width: "100%",
      margin: theme.spacing(1, 0),
    },
  },
  errorHelperText: {
    color: "red !important",
    margin: "0 0 8px !important",
  },
  dayLabel: {
    color: "black",
    textTransform: "capitalize",
    fontWeight: 900,
  },
  headerTitle: {
    margin: "50px 0px",
    fontWeight: 900,
  },
  wageInput: {
    width: "160px",
  },
  wageLabel: {
    marginRight: "11px",
    textTransform: "uppercase",
  },
}));

export default useStyles;
