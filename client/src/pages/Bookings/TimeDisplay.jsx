import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

export default function TimeDisplay({ endTime, startTime }) {
  const pageStyles = makeStyles()((theme) => ({
      BookingSubHr: {
        fontWeight: 600,
        fontSize: "12px",
        color: "black",
      },
    })
  );
  const pageClasses = pageStyles();

  const endDate = endTime ? new Date(endTime) : new Date();
  const startDate = startTime ? new Date(startTime) : new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minutes: "numeric",
  };

  const timeEnd = endDate.toLocaleDateString("en-US", options);
  const timeStart = startDate.toLocaleDateString("en-US", options);

  return (
    <Box>
      <Typography variant="body2" color="textSecondary">
        From
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        className={pageClasses.BookingSubHr}
      >
        {timeStart}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        To
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        className={pageClasses.BookingSubHr}
      >
        {timeEnd}
      </Typography>
    </Box>
  );
}
