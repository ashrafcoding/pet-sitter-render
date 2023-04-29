import { useState, useEffect } from "react";
import { getRequests } from "../../helpers/APICalls/request";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useStyles from "./useStyles";
import CalendarWrap from "./Calendar";
import NextBookings from "./NextBookings";
import ManageBookings from "./ManageBookings";
import { useSnackBar } from "../../context/useSnackbarContext";
import Layout from "../Layout/Layout";

export default function Bookings() {
  const { classes } = useStyles();
  const defaultResModel = {
    nextBooking: {},
    currentBookings: [],
    pastBookings: [],
  };
  const [requests, setRequest] = useState(defaultResModel);
  const returnRequestType = (success) => success["resModel"];
  const { updateSnackBarMessage } = useSnackBar();

  const updateStatusState = (id, status, sectionName) => {
    const requestCopy = { ...requests };
    if (id === requestCopy.nextBooking?._id) {
      requestCopy.nextBooking.status = status;
      setRequest(requestCopy);
      return;
    }

    const index = requestCopy[sectionName].findIndex(
      (booking) => booking._id === id
    );
    if (index >= 0) {
      requestCopy[sectionName][index].status = status;
      setRequest(requestCopy);
      return;
    }
  };

  useEffect(() => {
    try {
      const fetchRequests = async () => {
        const success = await getRequests();
        if (success) {
          const resModelSuccess = returnRequestType(success);
          if (resModelSuccess) setRequest(resModelSuccess);
        }
      };
      fetchRequests();
    } catch (error) {
      if (error instanceof Error) updateSnackBarMessage(error.message);
    }
  }, [updateSnackBarMessage]);

  return (
    <Layout>
      <Container maxWidth="md" className={classes.container}>
        <Box className={`${classes.root} ${classes.mt}`}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <NextBookings
                nextBooking={requests.nextBooking}
                updateStatusState={updateStatusState}
              />
              <ManageBookings
                currentBookings={requests.currentBookings}
                pastBookings={requests.pastBookings}
                updateStatusState={updateStatusState}
              />
            </Grid>
            <Grid item xs={12} sm={6} mt={1}>
              <CalendarWrap currentBookings={requests.currentBookings} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
