import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  senderBubbleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: theme.spacing(2, 0),
  },
  bubble: {
    maxWidth: "400px",
    padding: theme.spacing(0.5, 2),
    borderRadius: "12px",
  },
  text: {
    fontSize: "14px",
    padding: theme.spacing(1),
    fontWeight: 700,
  },
}));

export default useStyles;
