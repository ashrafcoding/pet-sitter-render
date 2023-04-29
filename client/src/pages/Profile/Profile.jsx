import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import ProfileSideBar from './ProfileSideBar/ProfileSideBar';
import Layout from '../Layout/Layout';
import TempProfileMain from './TempProfileMain/TempProfileMain';
import EditProfile from './EditProfile/EditProfile';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import Availability from './Availability/Availability';
import Payment from './Payment/Payment';
import Security from './Security/Security';
import Settings from './Settings/Settings';
import useStyles from './useStyles';

const Profile = () => {
  const {classes} = useStyles();
  const location = useLocation();

  const content = () => {
    switch (location.pathname) {
      case '/profile':
        return <TempProfileMain />;
      case '/profile/edit':
        return <EditProfile />;
      case '/profile/photo':
        return <ProfilePhoto />;
      case '/profile/payment':
        return <Payment />;
      case '/profile/availability':
        return <Availability />;
      case '/profile/security':
        return <Security />;
      case '/profile/settings':
        return <Settings />;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Grid container className={classes.profile}>
        <ProfileSideBar />
        {content()}
      </Grid>
    </Layout>
  );
};

export default Profile;
