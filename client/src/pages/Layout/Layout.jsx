import { Grid, CssBaseline, CircularProgress, Box } from '@mui/material';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import useStyles from './useStyles';


export default function Layout({ children }) {
  const {classes} = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (!loggedInUser) return <CircularProgress />;

  return (
    <Grid container component="main" className={`${classes.root} ${classes.layout}`}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12}>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection="column"
          minHeight="100vh"
        >
          <AuthHeader loggedInUser={loggedInUser} asideText="Become a sitter" linkTo="/profile/edit" />
          <Box
            className={classes.layoutOuterContainer}
            width="100%"
            height="calc(100vh - 90px)"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid className={classes.layoutContainer} container>
              {children}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
