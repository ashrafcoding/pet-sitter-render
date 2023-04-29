import { useState, useEffect } from 'react';
import { Box, InputBase, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from 'use-debounce';
import { searchSitters } from '../../../helpers/APICalls/profiles';
import useStyles from './useStyles';
import { useSnackBar } from '../../../context/useSnackbarContext';

const SearchLocation = ({ dateRange, setProfiles, search, handleChange }) => {
  const {classes} = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearch] = useDebounce(search, 500);
  const { updateSnackBarMessage } = useSnackBar();

  const saveOptions = (cities) => {
    setOptions(cities);
  };

  useEffect(() => {
    let active = true;
    try {
      const searchAndSaveSitters = async () => {
        setLoading(true);
        const response = await searchSitters({
          city: debouncedSearch,
          searchStartDate: dateRange[0]?.toISOString().split('T')[0],
          searchEndDate: dateRange[1]?.toISOString().split('T')[0],
        });
        setProfiles(response );

        const sitterCities = [];

        if (active && response && (response).length) {
          (response).map((sitter) => sitterCities.push(sitter.address));
          saveOptions([...new Set(sitterCities)]);
        }
        setLoading(false);
      };

      searchAndSaveSitters();
    } catch (error) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
    }

    return () => {
      active = false;
    };
  }, [dateRange, debouncedSearch, setProfiles, updateSnackBarMessage]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Autocomplete
        id="asynchronous-search-location"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionLabel={(option) => option}
        options={options}
        loading={loading}
        onInputChange={handleChange}
        inputValue={search}
        noOptionsText="No Sitters Found"
        freeSolo
        renderInput={(params) => (
          <Box width="300px" height="56px" className={classes.search}>
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              placeholder="Search"
              classes={{
                root: classes.searchRoot,
                input: classes.searchInput,
              }}
              startAdornment={<SearchIcon className={classes.searchIcon} />}
            />
          </Box>
        )}
      />
    </form>
  );
};

export default SearchLocation;
