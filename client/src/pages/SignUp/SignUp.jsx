import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useStyles from "./useStyles";
import register from "../../helpers/APICalls/register";
import SignUpForm from "./SignUpForm/SignUpForm";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useAuth } from "../../context/useAuthContext";
import { useSnackBar } from "../../context/useSnackbarContext";
import { Navigate } from "react-router-dom";

export default function Register() {
  const { classes } = useStyles();
  const { updateLoginContext, loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = ({ username, email, password }, { setSubmitting }) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
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

  if (loggedInUser) {
    return <Navigate to="/dashboard" replace={true} />;
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
          <AuthHeader asideText="Become a sitter" linkTo="/signup" />
          <Box
            className={classes.signupOuterContainer}
            width="100%"
            maxWidth={600}
            p={3}
            alignSelf="center"
          >
            <Grid
              className={classes.signupContainer}
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
                  Sign Up
                </Typography>
              </Grid>
              <SignUpForm handleSubmit={handleSubmit} />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="170px"
                margin="20px auto"
              >
                <Typography
                  className={classes.alreadyMember}
                  component="p"
                  variant="body1"
                >
                  Already a member?
                </Typography>
                <Typography
                  component={Link}
                  to="/login"
                  className={classes.loginText}
                  variant="body1"
                >
                  Login
                </Typography>
              </Box>
            </Grid>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
