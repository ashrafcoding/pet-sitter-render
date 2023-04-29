import {  useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Search from "./Search/Search";
import ChatBox from "./ChatBox/ChatBox";
import CustomProgressCircular from "../../../components/CustomProgressCircular/CustomProgressCircular";
import useStyles from "./useStyles";

const ChatSideBanner = ({ conversations }) => {
  const [search, setSearch] = useState("test");
  const [newChatUser, setNewChatUser] = useState(null);
  const {classes} = useStyles();

  // React.FormEvent<FormControl & FormControlProps>)
  const handleChange = (e, newInputValue) => {
    setSearch(newInputValue);
    if (newChatUser) {
      setNewChatUser(null);
    }
  };

  if (!conversations) return <CustomProgressCircular />;

  return (
    <Grid item sm={4} className={classes.chatSideBanner}>
      <Box display="flex" flexDirection="column">
        <Box className={classes.chatSideBannerBox}>
          <Typography className={classes.inboxMessages} variant="h5">
            Inbox Messages
          </Typography>
          <Search search={search} handleChange={handleChange} />
        </Box>
        {conversations?.map((conversation ) => (
          <ChatBox conversation={conversation} key={conversation._id} />
        ))}
      </Box>
    </Grid>
  );
};

export default ChatSideBanner;
