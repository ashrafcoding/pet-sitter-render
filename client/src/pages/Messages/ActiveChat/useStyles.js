import { makeStyles } from "tss-react/mui";

const activeChatHeaderHeight = "125px";
const mobileChatHeaderHeight = "82px";

const useStyles = makeStyles()((theme) => ({
  activeChat: {
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  activeChatOuterBox: {
    height: "100%",
  },
  chatContainer: {
    height: `calc(100% - ${activeChatHeaderHeight})`,
    [theme.breakpoints.down("xs")]: {
      height: `calc(100vh - ${mobileChatHeaderHeight})`,
    },
  },
  mobileActiveChat: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
