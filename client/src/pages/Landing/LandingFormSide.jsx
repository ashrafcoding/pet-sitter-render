import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useStyles from "./Styles/Landing";
import LandingForm from "./LandingForm";
import Logo from "../../Images/logo.png";

export default function Landing(){
  const {classes} = useStyles();

  return (
    <Box className={classes.authWrapper}>
      <Box className={classes.logoWrapper}>
        <img src={Logo} alt={"logo"} />
      </Box>
      <Box width="100%" maxWidth={450} p={3} alignSelf="center">
        <Grid container>
          <Grid item xs>
            <Typography className={classes.welcome} component="h1" variant="h5">
              Find the care your dog deserves
            </Typography>
          </Grid>
        </Grid>
        <LandingForm />
      </Box>
      <Box p={1} alignSelf="center" />
    </Box>
  );
}
