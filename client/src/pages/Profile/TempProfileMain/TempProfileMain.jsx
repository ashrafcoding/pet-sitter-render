import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useStyles from "./useStyles";

const TempProfileMain = () => {
  const {classes} = useStyles();

  return (
    <Grid item xs={12} sm={9} elevation={6} component={Paper} square>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.tempProfileMain}
      >
        <Typography component="h5" variant="h5" align="center">
          TempProfileMain Page Template
        </Typography>
      </Box>
    </Grid>
  );
};

export default TempProfileMain;
