import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, CircularProgress } from '@mui/material';
import Layout from '../../Layout/Layout';
import ProfileDetailCard from './ProfileDetailCard/ProfileDetailCard';
import BookingCard from './BookingCard/BookingCard';
import { getProfileDetail } from '../../../helpers/APICalls/profiles';
import { useSnackBar } from '../../../context/useSnackbarContext';

const ProfileDetail = () => {
  const params = useParams();
  const { sitterId } = params;

  const [sitter, setSitter] = useState(null);

  const { updateSnackBarMessage } = useSnackBar();

  useEffect(() => {
    try {
      const fetchProfileDetail = async () => {
        const fetchedProfileDetail = await getProfileDetail(sitterId);
        setSitter(fetchedProfileDetail);
      };
      fetchProfileDetail();
    } catch (error) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
    }
  }, [setSitter, sitterId, updateSnackBarMessage]);

  if (!sitter)
    return (
      <Layout>
        <Box height="100%" display="flex" justifyContent="center" alignItems="center">
          <CircularProgress size={100} />
        </Box>
      </Layout>
    );

  return (
    <Layout>
      <Box width="100%">
        <Grid
          maxWidth="2160px"
          container
          spacing={{ xs: 0, sm: 1, md: 3, lg: 5, xl: 10 }}
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <ProfileDetailCard sitter={sitter} />
          <BookingCard sitter={sitter} />
        </Grid>
      </Box>
    </Layout>
  );
};

export default ProfileDetail;
