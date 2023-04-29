import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BookingsTemplate from "./BookingsTemplate";
import bookingTemplate from "./BookingStyles/bookingsTemplate";

export default function ManageBookings({
  pastBookings,
  currentBookings,
  updateStatusState,
}) {
  const pageClasses = bookingTemplate();

  return (
    <Box className={pageClasses.text}>
      <Paper className={pageClasses.paper}>
        <BookingsTemplate
          updateStatusState={updateStatusState}
          sectionName={"current bookings"}
          bookings={currentBookings}
        />
        <BookingsTemplate
          updateStatusState={updateStatusState}
          sectionName={"past bookings"}
          bookings={pastBookings}
        />
      </Paper>
    </Box>
  );
}
