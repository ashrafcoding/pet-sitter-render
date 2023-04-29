import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  otherUserBubbleBox: {
    display: "flex",
    padding: theme.spacing(2, 0, 2, 3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 0),
    },
  },
  otherUserAvatar: {
    padding: theme.spacing(0),
    marginRight: theme.spacing(2),
  },
  bubble: {
    maxWidth: "400px",
    padding: theme.spacing(0.5, 2),
    borderRadius: "12px",
    backgroundColor: "#E9EEF9",
  },
  text: {
    padding: theme.spacing(1),
  },
}));

export default useStyles;
