import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { searchSitters } from "../../../helpers/APICalls/profiles";
import { useSnackBar } from "../../../context/useSnackbarContext";
import useStyles from "./useStyles";

const SearchDateRange = ({ search, setProfiles, dateRange, handleChange }) => {
  const { classes } = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  // const formattedDateRangeText = (dateRange) => {
  //   const startYear = dateRange[0]?.getFullYear();
  //   const startDate = dateRange[0]?.getDate();
  //   const startMonth = dateRange[0]?.toLocaleDateString("en-US", {
  //     month: "short",
  //   });
  //   const endDate = dateRange[1]?.getDate();
  //   const endMonth = dateRange[1]?.toLocaleDateString("en-US", {
  //     month: "short",
  //   });
  //   return `${startDate} ${startMonth} - ${endDate} ${endMonth} ${startYear}`;
  // };

  useEffect(() => {
    try {
      const searchByDateRange = async () => {
        const response = await searchSitters({
          city: search,
          searchStartDate: dateRange[0]?.toISOString().split("T")[0],
          searchEndDate: dateRange[1]?.toISOString().split("T")[0],
        });
        setProfiles(response);
      };

      searchByDateRange();
    } catch (error) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
    }
  }, [search, dateRange, setProfiles, updateSnackBarMessage]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        format="dd MMM yyyy"
        disableMaskedInput={true}
        value={dateRange[0]}
        onChange={(date)=>handleChange([date])}
        renderInput={(startProps) => (
          <Box className={classes.dateRangeBox}>
            <TextField
              {...startProps}
              InputProps={{
                startAdornment: (
                  <DateRangeIcon className={classes.dateRangeIcon} />
                ),
                placeholder: "Choose Dates"
              }}
            />
          </Box>
        )}
      />

      <MobileDatePicker
        format="dd MMM yyyy"
        disableMaskedInput={true}
        value={dateRange[1]}
        onChange={(date)=>handleChange([...dateRange, date])}
        renderInput={(endProps) => (
          <Box className={classes.dateRangeBox}>
            <TextField
              {...endProps}
              InputProps={{
                startAdornment: (
                  <DateRangeIcon className={classes.dateRangeIcon} />
                ),
                placeholder: "Choose Dates"
              }}
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default SearchDateRange;
