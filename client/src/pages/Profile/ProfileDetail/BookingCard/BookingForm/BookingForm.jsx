import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  TextField,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DateRangeIcon from "@mui/icons-material/DateRange";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { createRequest } from "../../../../../helpers/APICalls/request";
import { createNotification } from "../../../../../helpers/APICalls/notifications";
import { useSnackBar } from "../../../../../context/useSnackbarContext";
import useStyles from "./useStyles";
import { useAuth } from "../../../../../context/useAuthContext";
import { useSocket } from "../../../../../context/useSocketContext";

const formSchema = { dateRange: [null, null] };

const validationSchema = Yup.object().shape({
  dateRange: Yup.array().of(
    Yup.date().typeError("Wrong Date Type").required("Required").nullable()
  ),
});

const BookingForm = ({ sitter }) => {
  const { classes } = useStyles();
  const [dateRange, setDateRange] = useState([null, null]);
  const { updateSnackBarMessage } = useSnackBar();
  const { loggedInUser } = useAuth();
  const { socket } = useSocket();

  const handleSubmit = async ({ dateRange }, { setSubmitting, resetForm }) => {
    if (dateRange[0] && dateRange[1]) {
      try {
        if (loggedInUser?.profileId) {
          const { success } = await createRequest(
            loggedInUser.profileId,
            sitter._id,
            dateRange?.[0],
            dateRange?.[1]
          );
          if (success?.newRequest) {
            socket?.emit("notification", { recipientId: sitter._id });
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          updateSnackBarMessage(error.message);
        }
      }

      try {
        await createNotification(
          "Pet Sitting",
          `${sitter.firstName} ${sitter.lastName}'s Request`,
          `${sitter.firstName} ${sitter.lastName} sent a Request!`
        );
      } catch (error) {
        if (error instanceof Error) {
          updateSnackBarMessage(error.message);
        }
      }
    }
    setSubmitting(false);
    setDateRange([null, null]);
    resetForm({ values: { dateRange: [null, null] } });
    // history("/listings");
  };

  const handleChange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  const onValidate = (values) => {
    const errors = {};
    if (!values.dateRange || !values.dateRange[0] || !values.dateRange[1]) {
      errors.dateRange = "Please choose Date and Time.";
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
            component="h5"
            variant="h5"
            align="center"
            className={classes.hourlyWage}
          >
            {`$ ${sitter.hourlyWage}/ hr`}
          </Typography>
          <Rating
            name="read-only"
            value={4}
            readOnly
            className={classes.rating}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              inputFormat="dd MMM yyyy"
              disableMaskedInput={true}
              value={dateRange[0]}
              onChange={(date) => {
                values.dateRange = [date, dateRange[1]];
                return handleChange(values.dateRange);
              }}
              renderInput={(startProps) => (
                <>
                  <Box
                    display="flex"
                    flexDirection="column"
                    className={classes.inputField}
                  >
                    <Typography variant="body2" className={classes.label}>
                      Drop In
                    </Typography>
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
                      <TimePicker
                        format="hh aaa"
                        value={dateRange[0]}
                        views={["hours"]}
                        onChange={(newDateTime) => {
                          values.dateRange[0] = newDateTime;
                          return setDateRange((prevDateRange) => [
                            newDateTime,
                            prevDateRange[1],
                          ]);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className={classes.hourInput}
                            placeholder="Choose Time"
                            error={
                              touched.dateRange && Boolean(errors.dateRange)
                            }
                          />
                        )}
                      />
                    </Box>
                  </Box>
                </>
              )}
            />

            <MobileDatePicker
              inputFormat="dd MMM yyyy"
              disableMaskedInput={true}
              value={dateRange[1]}
              onChange={(date) => {
                values.dateRange = [dateRange[0], date];
                return handleChange(values.dateRange);
              }}
              renderInput={(endProps) => (
                <>
                  <Box
                    display="flex"
                    flexDirection="column"
                    className={classes.inputField}
                  >
                    <Typography variant="body2" className={classes.label}>
                      Drop Off
                    </Typography>
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
                    <TimePicker
                      format="hh aaa"
                      value={dateRange[1]}
                      views={["hours"]}
                      onChange={(newDateTime) => {
                        values.dateRange[1] = newDateTime;
                        return setDateRange((prevDateRange) => [
                          prevDateRange[0],
                          newDateTime,
                        ]);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.hourInput}
                          placeholder="Choose Time"
                          error={touched.dateRange && Boolean(errors.dateRange)}
                        />
                      )}
                    />
                  </Box>
                </>
              )}
            />
          </LocalizationProvider>
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
              "Send Request"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
