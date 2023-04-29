import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    lineHeight: "18px",
    border: "1px solid #ccc",
    [theme.breakpoints.down("xs")]: {
      width: "80vw !important",
    },
  },
  searchRoot: {
    width: "100%",
    height: "100%",
  },
  searchInput: {
    paddingLeft: "48px !important",
  },
  searchIcon: {
    position: "absolute",
    pointerEvents: "none",
    marginLeft: "1rem",
  },
}));

export default useStyles;
