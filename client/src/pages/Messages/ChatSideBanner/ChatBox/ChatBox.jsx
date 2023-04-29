import { Box } from "@mui/material/";
import OtherUserAvatar from "../../../../components/OtherUserAvatar/OtherUserAvatar";
import ChatBoxContent from "./ChatBoxContent/ChatBoxContent";
import { useConvo } from "../../../../context/useConvoContext";
import useStyles from "./useStyles";
import CustomProgressCircular from "../../../../components/CustomProgressCircular/CustomProgressCircular";



const ChatBox = ({ conversation }) => {
  const {classes} = useStyles();
  const { latestMessage, otherUserProfile } = conversation;
  const { firstName, lastName, photos } = otherUserProfile || {};
  const { toggleDrawer } = useConvo();

  if (!conversation) return <CustomProgressCircular />;

  return (
    <Box
      height="90px"
      display="flex"
      alignItems="center"
      className={classes.chatBox}
      onClick={toggleDrawer(true, conversation._id)}
    >
      <OtherUserAvatar
        isOnline={true}
        small={true}
        fullName={`${firstName} ${lastName}`}
        profileImg={
          !photos ? "https://robohash.org/defaultAvatarImage.png" : photos[1]
        }
      />
      <ChatBoxContent
        fullName={`${firstName} ${lastName}`}
        latestMessage={latestMessage}
      />
    </Box>
  );
};

export default ChatBox;
