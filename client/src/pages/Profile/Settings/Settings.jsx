import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Settings = () => {
  return (
    <Grid item xs={12} sm={9} elevation={6} component={Paper} square>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography component="h5" variant="h5" align="center">
          Settings Page Template
        </Typography>
      </Box>
    </Grid>
  );
};

export default Settings;
