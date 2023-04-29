import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import SenderBubble from "../SenderBubble/SenderBubble";
import OtherUserBubble from "../OtherUserBubble/OtherUserBubble";
import CustomProgressCircular from "../../../../components/CustomProgressCircular/CustomProgressCircular";
import useStyles from "./useStyles";

const ActiveChatMessages = ({
  messages,
  userId,
  otherUserProfile,
}) => {
  const {classes} = useStyles();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView(true);
    }
  }, [messages, scrollRef]);

  if (!messages) return <CustomProgressCircular />;

  return (
    <Box width="100%" className={classes.activeChatMessages}>
      {messages?.map((message) => {
        return message?.senderProfile?.userId === userId ? (
          <Box key={message._id}>
            <SenderBubble key={message._id} text={message.text} />
          </Box>
        ) : (
          <OtherUserBubble
            key={message._id}
            text={message.text}
            otherUserProfile={otherUserProfile}
          />
        );
      })}
      <Box {...({ ref: scrollRef } )}></Box>
    </Box>
  );
};

export default ActiveChatMessages;
