import { Box, Paper, Typography } from "@mui/material";
import OtherUserAvatar from "../../../../components/OtherUserAvatar/OtherUserAvatar";
import useStyles from "./useStyles";


const OtherUserBubble = ({ text, otherUserProfile }) => {
  const {classes} = useStyles();
  const { photos } = otherUserProfile || {};

  return (
    <Box className={classes.otherUserBubbleBox}>
      <OtherUserAvatar
        small={true}
        profileImg={
          !photos ? "https://robohash.org/defaultAvatarImage.png" : photos[1]
        }
        customClasses={classes.otherUserAvatar}
      />
      <Paper elevation={1} className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Paper>
    </Box>
  );
};

export default OtherUserBubble;
