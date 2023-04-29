import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 2),
    borderTop: "1px solid #eee",
  },
  input: {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  sendBtn: {
    fontSize: "14px",
    width: "150px",
    height: "50px",
    padding: theme.spacing(2),
    margin: theme.spacing(0, 4, 0, 0),
  },
}));

export default useStyles;
