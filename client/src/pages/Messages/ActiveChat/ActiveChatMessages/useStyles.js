import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  activeChatMessages: {
    overflow: "auto",
    flexGrow: 1,
    padding: theme.spacing(1, 3, 3),
  },
}));

export default useStyles;
