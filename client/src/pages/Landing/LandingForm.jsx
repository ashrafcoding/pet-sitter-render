import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@mui/material";
// import {  MobileDateRangePicker } from '@mui/lab';
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DateRangeIcon from "@mui/icons-material/DateRange";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import landingFormStyle from "./Styles/LandingForm";
import { useNavigate } from "react-router-dom";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const formSchema = { DatePicker };

const validationSchema = Yup.object().shape({
  dateRange: Yup.array().of(
    Yup.date().typeError("Wrong Date Type").required("Required").nullable()
  ),
});

const LandingForm = () => {
  const { classes } = landingFormStyle();
  const history = useNavigate();

  const [dateRange, setDateRange] = useState([null, null]);

  const handleSubmit = ({ dateRange }, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    setDateRange([null, null]);
    resetForm({ values: { dateRange: [null, null] } });
    history("/listings");
  };

  const handleChange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  const onValidate = (values) => {
    const errors = {};
    if (!values.dateRange || !values.dateRange[0] || !values.dateRange[1]) {
      errors.dateRange = "Please choose Date";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={formSchema}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validate={onValidate}
    >
      {({ handleSubmit, values, touched, errors, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={classes.bookingForm}>
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            className={classes.label}
          >
            Where
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Anywhere"
          />
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            className={classes.label}
          >
            Drop In / Drop Off
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box display="flex">
              <MobileDatePicker
                format="dd MMM yyyy"
                disableMaskedInput={true}
                value={dateRange[0]}
                onChange={(date) => {
                  values.dateRange = [date];
                  return handleChange(values.dateRange);
                }}
                renderInput={(startProps) => (
                  <Box className={classes.dateInputWrapper}>
                    <Box display="flex" className={classes.inputField}>
                      <TextField
                        {...startProps}
                        InputProps={{
                          startAdornment: (
                            <DateRangeIcon className={classes.dateRangeIcon} />
                          ),
                          placeholder: "Choose Date",
                        }}
                        error={touched.dateRange && Boolean(errors.dateRange)}
                      />
                    </Box>
                  </Box>
                )}
              />

              <MobileDatePicker
                format="dd MMM yyyy"
                disableMaskedInput={true}
                value={dateRange[1]}
                onChange={(date) => {
                  values.dateRange = [...values.dateRange, date]
                  return handleChange(values.dateRange);
                }}
                renderInput={(endProps) => (
                  <Box className={classes.dateInputWrapper}>
                    <Box display="flex" className={classes.inputField}>
                      <TextField
                        {...endProps}
                        InputProps={{
                          startAdornment: (
                            <DateRangeIcon className={classes.dateRangeIcon} />
                          ),
                          placeholder: "Choose Date",
                        }}
                        error={touched.dateRange && Boolean(errors.dateRange)}
                      />
                    </Box>
                  </Box>
                )}
              />
            </Box>

            <FormHelperText className={classes.errorHelperText}>
              {(touched.dateRange &&
                (errors.dateRange ||
                  errors.dateRange?.[0] ||
                  errors.dateRange?.[1])) ||
                null}
            </FormHelperText>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSubmitting ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Find my dog sitter"
              )}
            </Button>
          </LocalizationProvider>
        </Form>
      )}
    </Formik>
  );
};

export default LandingForm;
