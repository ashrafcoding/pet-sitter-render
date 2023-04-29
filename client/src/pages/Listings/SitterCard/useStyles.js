import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    "& .MuiCardContent-root:last-child": {
      paddingBottom: theme.spacing(1.5),
    },
  },
  sitterOuterBox: {
    margin: theme.spacing(3, "auto"),
    [theme.breakpoints.down("xs")]: {
      width: "70% !important",
    },
  },
  avatar: {
    width: "100px !important",
    height: "100px !important",
    border: "5px solid #ffffff",
    "&:hover": {
      opacity: "0.8",
    },
  },
  sitterName: {
    padding: theme.spacing(1),
  },
  sitterShortDesc: {
    color: "#aaa",
  },
  sitterAboutMe: {
    padding: theme.spacing(0, 2),
  },
  profileDetailBottom: {
    padding: theme.spacing(2, 4),
  },
  aboutMeDesc: {
    marginBottom: theme.spacing(3),
  },
  rating: {
    margin: theme.spacing(1, "auto"),
  },
  locationIcon: {
    color: theme.palette.primary.main,
  },
  locationWage: {
    borderTop: "1px solid #ccc",
    padding: theme.spacing(1, 0, 0),
    margin: theme.spacing(2, 0, 0),
  },
  locationText: {
    color: "#aaa",
  },
  wage: {
    fontWeight: 700,
  },
}));

export default useStyles;
