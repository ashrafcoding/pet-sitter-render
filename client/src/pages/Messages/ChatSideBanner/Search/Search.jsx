import {  useState, useEffect } from "react";
import useStyles from "./useStyles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Autocomplete from '@mui/material/Autocomplete';
import { useDebounce } from "use-debounce";
import { searchUsers } from "../../../../helpers/APICalls/searchUsers";


const Search = ({ search, handleChange }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  // limit our call to the api with a debounced value at max of 1 per 0.5 seconds
  const [debouncedSearch] = useDebounce(search, 500);

  const {classes} = useStyles();

  const saveOptions = (users) => {
    setOptions(users);
  };

  useEffect(() => {
    let active = true;

    async function searchAndSaveUsers() {
      // send request to backend API to get users limited to 20.
      setLoading(true);
      const response = await searchUsers({
        search: debouncedSearch,
      });

      if (active && response && response.users) {
        saveOptions(response.users);
      }
      setLoading(false);
    }

    searchAndSaveUsers();

    return () => {
      active = false;
    };
  }, [debouncedSearch]);

  // creates a combobox search which is dynamically updated with call's to the API
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Autocomplete
        id="asynchronous-search"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) =>
          option.username === value.username
        }
        getOptionLabel={(option) => option.username }
        options={options}
        loading={loading}
        onInputChange={handleChange}
        inputValue={search}
        noOptionsText="No Users Found"
        freeSolo
        renderInput={(params) => (
          <div className={classes.search}>
            <InputBase
              {...params.InputProps}
              placeholder="Search"
              classes={{
                root: classes.searchRoot,
                input: classes.searchInput,
              }}
              inputProps={{
                "aria-label": "search",
                // ref: params.inputProps.ref,
                ...params.inputProps
              }}
              startAdornment={
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              }
            />
          </div>
        )}
      />
    </form>
  );
};

export default Search;
