import { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import Layout from '../Layout/Layout';
import SearchLocation from './SearchLocation/SearchLocation';
import SearchDateRange from './SearchDateRange/SearchDateRange';
import SitterCard from './SitterCard/SitterCard';
import { searchSitters } from '../../helpers/APICalls/profiles';
import { useSnackBar } from '../../context/useSnackbarContext';
import useStyles from './useStyles';

const Listings = () => {
  const [profiles, setProfiles] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateSnackBarMessage } = useSnackBar();
  const {classes} = useStyles();

  const searchLocationHandleChange = (e, newInputValue) => {
    setSearch(newInputValue);
  };

  const searchDateRangeHandleChange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  useEffect(() => {
    try {
      const fetchProfiles = async () => {
        setLoading(true);
        const fetchedProfiles = await searchSitters({
          city: search,
          searchStartDate: dateRange[0]?.toISOString().split('T')[0],
          searchEndDate: dateRange[1]?.toISOString().split('T')[0],
        });
        if (fetchedProfiles.error) {
          updateSnackBarMessage(fetchedProfiles.error);
        }
        setProfiles(fetchedProfiles);
        setLoading(false);
      };
      fetchProfiles();
    } catch (error) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
      setLoading(false);
    }
  }, [dateRange, search, updateSnackBarMessage]);

  const handleShowMore = () => {};

  return (
    <Layout>
      <Grid height="100%" className={classes.listings}>
        <Box
          height="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.searchTitleBox}
        >
          <Typography component="h4" variant="h4" align="center" className={classes.searchTitleText}>
            Your search results
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" className={classes.searchBox}>
          <SearchLocation
            dateRange={dateRange}
            setProfiles={setProfiles}
            search={search}
            handleChange={searchLocationHandleChange}
          />
          <SearchDateRange
            search={search}
            setProfiles={setProfiles}
            dateRange={dateRange}
            handleChange={searchDateRangeHandleChange}
          />
        </Box>

        {loading && (
          <Box height="60%" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress size={100} />
          </Box>
        )}

        {!loading && profiles.length && (
          <>
            <Grid
              width="100vw"
              minHeight="calc(100vh - 196px)"
              container
              className={classes.sitterLists}
              justifyContent="space-evenly"
            >
              {profiles.map((profile) => (
                <SitterCard key={profile._id} sitter={profile} />
              ))}
            </Grid>
            <Box display="flex" justifyContent="center" alignItems="center" className={classes.showMoreBox}>
              <Button variant="outlined" onClick={handleShowMore} className={classes.showMoreBtn}>
                Show More
              </Button>
            </Box>
          </>
        )}
      </Grid>
    </Layout>
  );
};

export default Listings;
