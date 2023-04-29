import { makeStyles } from "tss-react/mui";
import Dog from "../../../Images/landing-dog-sqr.jpg";

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: "100vh",
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)",
    },
  },
  imageSideWrapper: {
    backgroundImage: `url(${Dog})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  authHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "400px",
    marginRight: "50px",
    flexDirection: "row",
    paddingTop: 23,
  },
  link: {
    margin: "0px",
  },
  sitter: {
    textDecoration: "underline",
  },
  login: {
    borderColor: "white",
  },
  signup: {
    backgroundColor: "#f04040 !important",
    fontSize: "11px !important",
  },
  button: {
    textTransform: "uppercase",
    padding: "10px 5px",
    color: "white",
    width: "115px",
  },
}));

export default useStyles;
