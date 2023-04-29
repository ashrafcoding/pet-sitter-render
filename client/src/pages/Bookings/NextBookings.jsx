import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditButton from "./EditButton";
import TimeDisplay from "./TimeDisplay";
import nextBookingClasses from "./BookingStyles/NextBooking";
import avatar from "../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png";

export default function NextBookings({ nextBooking, updateStatusState }) {
  const pageClasses = nextBookingClasses();

  return (
    <Box className={pageClasses.wrapper}>
      <Paper className={pageClasses.paper}>
        <Grid container spacing={2} m={1} mb={3}>
          <Grid item xs={12} sm>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={pageClasses.sectionHr}
                >
                  your next booking
                </Typography>
                {nextBooking.startDate ? (
                  <TimeDisplay
                    endTime={nextBooking.startDate}
                    startTime={nextBooking.startDate}
                  />
                ) : (
                  <Typography gutterBottom variant="subtitle1">
                    No upcoming booking
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  className={pageClasses.nextBookNameWrapper}
                >
                  TEMP img tags
                </Typography>
                <Avatar alt="Remy Sharp" src={avatar} />
                <Box className={pageClasses.tempImg}></Box>
                <Box className={pageClasses.nextBookNameHr}>
                  {nextBooking?.sitterId}
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <EditButton
                sectionName={"next booking"}
                updateStatusState={updateStatusState}
                requestId={nextBooking?._id}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
