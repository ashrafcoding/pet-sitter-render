import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 19,
    color: "#000000",
    fontWeight: 700,
    paddingLeft: "5px",
    textTransform: "uppercase",
  },
  inputs: {
    marginTop: ".8rem",
    height: "2rem",
    padding: "12px",
    border: "1px solid #dddddd",
    borderRadius: theme.shape.borderRadius,
  },
  forgot: {
    marginTop: ".8rem",
    paddingRight: 10,
    color: "#3a8dff",
  },
  submit: {
    margin: theme.spacing(2),
    padding: 10,
    width: 200,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    marginTop: 10,
    fontSize: 14,
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    fontWeight: 700,
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "24px auto 0",
    },
  },
  demoLoginBtn: {
    backgroundColor: "#ffffff",
    color: theme.palette.primary.main,
  },
  underline: {
    "&&:after": {
      borderBottom: "2px solid rgba(0, 0, 0, 0.87)",
      width: "99%",
      margin: "0 auto",
    },
  },
  errorOffset: {
    paddingBottom: "20px",
    marginBottom: "8px",
  },
}));

export default useStyles;
