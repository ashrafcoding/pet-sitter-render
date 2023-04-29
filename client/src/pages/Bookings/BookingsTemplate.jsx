import bookingTemplate from "./BookingStyles/bookingsTemplate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EditButton from "./EditButton";
import TimeDisplay from "./TimeDisplay";
import { useAuth } from "../../context/useAuthContext";
import Avatar from "@mui/material/Avatar";
import avatar from "../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png"

export default function ManageBookings({
  bookings,
  sectionName,
  updateStatusState,
}) {
  const  pageClasses  = bookingTemplate();
  const { loggedInUser } = useAuth();

  return (
    <Grid container spacing={2} p={1}>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs className={pageClasses.sectionWrapper}>
            <Typography
              variant="body2"
              gutterBottom
              className={pageClasses.sectionHr}
            >
              {sectionName}
            </Typography>
          </Grid>
          <Grid item >
            {bookings.map((booking) => (
              <Paper
                variant="outlined"
                className={pageClasses.paperOutlineWrap}
                key={booking._id}
                sx={{p:2}}
              >
                <Grid item container xs={12} sm>
                  <Grid item xs={9}>
                    <TimeDisplay
                      endTime={booking.startDate}
                      startTime={booking.startDate}
                    />
                    <Box className={pageClasses.nameWrapper}>
                       TEMP IMG tags 
                      <Avatar alt="Remy Sharp" src={avatar}/> 
                      <Box className={pageClasses.tempImg}></Box> 
                      {loggedInUser?.isSitter ? (
                        <>
                          <Avatar
                            alt={booking?.ownerId?.firstName}
                            className={pageClasses.red}
                            src={booking?.sitterId?.photos[1]}
                          />
                          <Box className={pageClasses.bookingNameHr}>
                            {booking?.ownerId?.firstName}
                          </Box>
                        </>
                      ) : (
                        <>
                          <Avatar
                            alt={booking?.ownerId?.firstName}
                            className={pageClasses.red}
                            src={booking?.sitterId?.photos[1]}
                          />
                          <Box className={pageClasses.bookingNameHr}>
                            {booking?.sitterId?.firstName}
                          </Box>
                        </>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={2} className={pageClasses.statusWrapper}>
                    <Typography
                      variant="subtitle1"
                      className={pageClasses.statusTxt}
                    >
                      {booking.status}
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={pageClasses.iconWrapper}>
                    <EditButton
                      sectionName={sectionName}
                      updateStatusState={updateStatusState}
                      requestId={booking._id}
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
