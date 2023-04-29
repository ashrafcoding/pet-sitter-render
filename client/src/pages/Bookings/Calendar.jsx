import 'date-fns';
import useStyles from './useStyles';
import Box from '@mui/material/Box';
import { Calendar } from 'react-multi-date-picker';
import { useState } from 'react';
import 'react-multi-date-picker/styles/colors/red.css';


export default function CalendarWrap({ currentBookings }) {
  const {classes} = useStyles();
  const selectedDates = currentBookings.map((booking) => new Date(booking.startDate));
  const [value, setValue] = useState(selectedDates);

  return (
    <Box className={classes.calendarWrap}>
      <Calendar className="red" multiple value={value} onChange={setValue} />
    </Box>
  );
}
