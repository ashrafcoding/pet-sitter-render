import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  avatar: {
    padding: theme.spacing(2, 1.5, 2, 0),
  },
  onlineBadge: {
    top: 25,
    right: 5,
    height: 13,
    width: 13,
    borderRadius: "50%",
    border: "2px solid white",
    backgroundColor: "#1CED84",
  },
  onlineActiveChatBadge: {
    top: 34,
    right: 8,
    height: 13,
    width: 13,
    borderRadius: "50%",
    border: "2px solid white",
    backgroundColor: "#1CED84",
  },
  profilePic: {
    height: 45,
    width: 45,
    border: "1px solid #ccc",
  },
  activeChatPic: {
    height: 55,
    width: 55,
    border: "1px solid #ccc",
  },
}));

export default useStyles;
