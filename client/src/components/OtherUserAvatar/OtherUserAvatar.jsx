import { Box, Badge, Avatar } from "@mui/material";
import clsx from "clsx";
import useStyles from "./useStyles";


const OtherUserAvatar = ({
  fullName,
  profileImg,
  small,
  isOnline,
  customClasses,
}) => {
  const {classes} = useStyles();

  return (
    <Box className={`${classes.avatar} ${customClasses}`}>
      <Badge
        classes={{
          badge: clsx({
            [classes.onlineBadge]: isOnline && small,
            [classes.onlineActiveChatBadge]: isOnline && !small,
          }),
        }}
        variant="dot"
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Avatar
          alt={fullName}
          src={profileImg}
          className={`${small ? classes.profilePic : classes.activeChatPic}`}
        />
      </Badge>
    </Box>
  );
};

export default OtherUserAvatar;
