import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  authHeader: {
    padding: theme.spacing(1, 3),
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  },
}));

export default useStyles;
