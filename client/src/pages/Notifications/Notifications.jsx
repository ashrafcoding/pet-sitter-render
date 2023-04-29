import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Pagination from '@mui/material/Pagination';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useStyles from "./NotificationStyles/Notifications";
import NotificationMessages from "../../components/Notification/NotificationMessages";
import {
  getNotifications,
  updReadNotifications,
  getCount,
} from "../../helpers/APICalls/notifications";
import Layout from "../Layout/Layout";

export default function NotificationPopover() {
  const {classes} = useStyles();
  const returnNotificationType = (res) =>
    res.notifications;
  const messages = [];
  const [messagesToShow, setmessagesToShow] = useState(messages);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const notificationRes = await getNotifications(page, 20, null);
      const messagesCopy = returnNotificationType(notificationRes);
      if (messagesCopy) setmessagesToShow(messagesCopy);

      const unreadMessages = messagesCopy
        .filter((notifs) => !notifs.read)
        .map((notifs) => notifs._id);
      if (unreadMessages.length <= 0) return;
      await updReadNotifications(unreadMessages);
    };
    fetchNotifications();
  }, [page]);

  useEffect(() => {
    const fetchCount = async () => {
      const success = await getCount(null);
      if (success) {
        const pageLimit = 20;
        const countCalc = Math.ceil(success["count"] / pageLimit);
        setCount(countCalc);
      }
    };
    fetchCount();
  }, []);

  return (
    <Layout>
      <Box className={`${classes.root} ${classes.pageWrap}`}>
        <Paper className={classes.paper}>
          {!messagesToShow.length ? (
            <Box>
              <Typography variant="subtitle1" className={classes.title}>
                No notifications.
              </Typography>
            </Box>
          ) : (
            <>
              <NotificationMessages messagesToShow={messagesToShow} />
              <Box className={classes.footerWrap}>
                <Pagination count={count} page={page} onChange={handleChange} />
              </Box>
            </>
          )}
        </Paper>
      </Box>
    </Layout>
  );
}
