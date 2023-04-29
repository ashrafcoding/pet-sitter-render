import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import useStyles from "./NotificationStyles/NotificationPopover";
import NotificationMessages from "./NotificationMessages";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  getNotifications,
  updReadNotifications,
} from "../../helpers/APICalls/notifications";
import { NavLink } from "react-router-dom";

export default function NotificationPopover({ updateCount }) {
  const { classes } = useStyles();
  const returnNotificationType = (res) => res.notifications;
  const messages = [];
  const [messagesToShow, setmessagesToShow] = React.useState(messages);
  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await getNotifications(1, 3, true);
      const messagesCopy = returnNotificationType(res);
      if (messagesCopy) setmessagesToShow(messagesCopy);

      if (messagesCopy.length > 0) {
        const notificationsIds = messagesCopy.map((notifs) => notifs._id);
        await updReadNotifications(notificationsIds);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <Box className={`${classes.root} ${classes.popoverWrap}`}>
      <Paper className={classes.paper}>
        {messagesToShow.length < 1 ? (
          <Box>
            <Typography variant="subtitle1" className={classes.title}>
              No unread notifications.
            </Typography>
          </Box>
        ) : (
          <NotificationMessages messagesToShow={messagesToShow} />
        )}
        <Box className={classes.footerWrap}>
          <Button component={NavLink} to={"/notifications"}>
            Show all notifications
            <OpenInNewIcon />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
