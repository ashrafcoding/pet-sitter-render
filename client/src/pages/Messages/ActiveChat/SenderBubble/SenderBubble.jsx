import { Box, Paper, Typography } from "@mui/material";
import useStyles from "./useStyles";


const SenderBubble = ({ text }) => {
  const {classes} = useStyles();

  return (
    <Box className={classes.senderBubbleBox}>
      <Paper elevation={1} className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Paper>
    </Box>
  );
};

export default SenderBubble;
