import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      "& .MuiPaper-rounded": {
        borderRadius: 0,
      },
    },
  },
  profileDetailBox: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  },
  profileDetailTop: {
    position: "relative",
  },
  profileBackgroundImg: {
    borderRadius: "5px",
  },
  avatar: {
    width: "150px !important",
    height: "150px !important",
    border: "5px solid #ffffff",
    margin: theme.spacing(-11.5, "auto", 0),
  },
  sitterName: {
    padding: theme.spacing(1, 0),
  },
  sitterShortDesc: {
    color: "#aaa",
  },
  sitterLocation: {
    margin: "0 auto",
    padding: theme.spacing(2, 0),
  },
  locationIcon: {
    color: "#f04040",
    marginRight: theme.spacing(0.5),
  },
  sitterLocationText: {
    color: "#aaa",
  },
  profileDetailBottom: {
    padding: theme.spacing(2, 4),
  },
  aboutMeTitle: {
    paddingBottom: theme.spacing(2),
  },
  aboutMeDesc: {
    marginBottom: theme.spacing(3),
  },
  imageList: {
    [theme.breakpoints.down("sm")]: {
      height: "365px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "340px",
    },
    [theme.breakpoints.up("md")]: {
      height: "145px",
      gridTemplateColumns: "repeat(4, 1fr) !important",
    },
  },
  imageItem: {
    padding: theme.spacing(1),
    borderRadius: "15px",
  },
}));

export default useStyles;
