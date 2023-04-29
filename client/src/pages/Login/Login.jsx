import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useStyles from "./useStyles";
import login from "../../helpers/APICalls/login";
import LoginForm from "./LoginForm/LoginForm";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useAuth } from "../../context/useAuthContext";
import { useSnackBar } from "../../context/useSnackbarContext";
import {Navigate} from "react-router-dom"

export default function Login() {
  const { classes } = useStyles();
  const { updateLoginContext, loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = ({ email, password }, { setSubmitting }) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage("An unexpected error occurred. Please try again");
      }
    });
  };

  if(loggedInUser){
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection="column"
          minHeight="100vh"
        >
          <AuthHeader asideText="Don't have an account?" linkTo="/signup" />
          <Box
            className={classes.loginOuterContainer}
            width="100%"
            maxWidth={600}
            p={3}
            alignSelf="center"
          >
            <Grid
              className={classes.loginContainer}
              container
              elevation={6}
              component={Paper}
            >
              <Grid item xs>
                <Typography
                  className={classes.welcome}
                  component="h1"
                  variant="h5"
                >
                  Welcome Back!
                </Typography>
              </Grid>
              <LoginForm handleSubmit={handleSubmit} />
            </Grid>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
