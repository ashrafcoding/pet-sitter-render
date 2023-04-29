import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  dateRangeBox: {
    position: "relative",
  },
  dateRangeIcon: {
    color: "#000",
    marginRight: theme.spacing(1),
  },
  fakePlaceholder: {
    position: "absolute",
    top: "18px",
    left: "48px",
    font: "inherit",
    color: "#aaa",
  },
  formattedDateRangeText: {
    position: "absolute",
    top: "18px",
    left: "48px",
  },
  startDateField: {
    color: "transparent !important",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
    },
  },
  endDateField: {
    display: "none !important",
  },
}));

export default useStyles;
