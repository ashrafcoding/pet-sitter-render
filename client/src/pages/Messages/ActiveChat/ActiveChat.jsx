import { Grid, Box, SwipeableDrawer } from "@mui/material";
import ActiveChatHeader from "./ActiveChatHeader/ActiveChatHeader";
import InputMessage from "./InputMessage/InputMessage";
import ActiveChatMessages from "./ActiveChatMessages/ActiveChatMessages";
import { useConvo } from "../../../context/useConvoContext";
import CustomProgressCircular from "../../../components/CustomProgressCircular/CustomProgressCircular";
import useStyles from "./useStyles";



const ActiveChat = ({ userId }) => {
  const {classes} = useStyles();
  const { activeConvo, mobileOpen, toggleDrawer } = useConvo();
  const { conversationId, messages, otherUserProfile } = activeConvo || {};
  const {
    _id: recipientProfileId,
    firstName,
    lastName,
    photos,
  } = otherUserProfile || {};

  const activeChatContents = (
    <>
      {otherUserProfile && conversationId && recipientProfileId && (
        <Box className={classes.activeChatOuterBox}>
          <ActiveChatHeader
            fullName={`${firstName} ${lastName}`}
            profileImg={
              !photos
                ? "https://robohash.org/defaultAvatarImage.png"
                : photos[1]
            }
            isOnline={true}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.chatContainer}
          >
            <ActiveChatMessages
              messages={messages}
              userId={userId}
              otherUserProfile={otherUserProfile}
            />
            <InputMessage
              conversationId={conversationId}
              recipientProfileId={recipientProfileId}
            />
          </Box>
        </Box>
      )}
    </>
  );

  return (
    <>
      <Grid item sm={8} className={classes.activeChat}>
        {activeChatContents}
      </Grid>

      <SwipeableDrawer
        className={classes.mobileActiveChat}
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false, conversationId)}
        onOpen={toggleDrawer(true, conversationId)}
      >
        <Box width="100vw" role="presentation">
          {!messages && <CustomProgressCircular />}
          {activeChatContents}
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default ActiveChat;
