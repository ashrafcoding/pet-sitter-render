import { Box, TextField } from "@mui/material";
// import { TimePicker } from "@mui/lab";
import { TimePicker } from '@mui/x-date-pickers';
import useStyles from "./useStyles";
import Typography from "@mui/material/Typography";

const AvailabilityForm = ({
  values,
  touched,
  errors,
  dateRange,
  day,
  updateTime,
}) => {
  const {classes} = useStyles();

  return (
    <Box
      className={classes.formWrap}
      flexDirection="row"
      display="flex"
      alignItems="center"
    >
      <Typography
        variant="button"
        className={`${classes.m5} ${classes.timeLabel}`}
      >
        From
      </Typography>
      <Box className={classes.m5}>
        <TimePicker
          format="hh aaa"
          value={dateRange[day][0]}
          views={["hours"]}
          onChange={(newDateTime) => {
            values.dateRange[day][0] = newDateTime;
            updateTime(newDateTime, day, 0);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.hourInput}
              placeholder="Choose Time"
              error={touched.dateRange && Boolean(errors.dateRange)}
            />
          )}
        />
      </Box>
      <Typography
        variant="button"
        className={`${classes.m5} ${classes.timeLabel}`}
      >
        To
      </Typography>
      <Box>
        <TimePicker
          format="hh aaa"
          value={dateRange[day][1]}
          views={["hours"]}
          onChange={(newDateTime) => {
            values.dateRange[day][1] = newDateTime;
            updateTime(newDateTime, day, 1);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.hourInput}
              placeholder="Choose Time"
              error={touched.dateRange && Boolean(errors.dateRange)}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default AvailabilityForm;
