import { Grid, Box, Paper } from '@mui/material';
import BookingForm from './BookingForm/BookingForm';
import useStyles from './useStyles';


const BookingCard = ({ sitter }) => {
  const {classes} = useStyles();

  return (
    <Grid item xs={12} sm={5} md={4} lg={4} xl={3} className={classes.root}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.bookingBox}
      >
        <Paper elevation={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.bookingContainer}
          >
            <BookingForm sitter={sitter} />
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default BookingCard;
