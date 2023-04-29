import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useStyles from "./Styles/Landing";
import LandingFormSide from "./LandingFormSide";
import LandingImageSide from "./LandingImageSide";
import Box from "@mui/material/Box";

export default function Landing() {
  const {classes} = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={7} md={6} component={Paper} square>
        <LandingFormSide />
      </Grid>
      <Grid item xs={12} sm={5} md={6} component={Paper} square>
        <Box
          className={classes.landingWrapper}
          // display={{ xs: "none", lg: "block" }}
        >
          <LandingImageSide />
          
        </Box>
      </Grid>
    </Grid>
  );
}
