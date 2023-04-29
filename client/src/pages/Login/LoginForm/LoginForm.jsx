import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Formik } from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import useStyles from "./useStyles";
import DemoUserLogin from "../../../components/DemoUserLogin/DemoUserLogin";


export default function Login({ handleSubmit }) {
  const {classes} = useStyles();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Email is not valid"),
        password: Yup.string()
          .required("Password is required")
          .max(100, "Password is too long")
          .min(6, "Password too short"),
      })}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} 
        className={classes.form} 
        noValidate>
          <TextField
            className={`${
              !(touched.email && Boolean(errors.email)) && classes.errorOffset
            }`}
            id="email"
            label={
              <Typography 
              className={classes.label}
              >Email Address</Typography>
            }
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs, underline: classes.underline },
            }}
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.email ? errors.email : ""}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <TextField
            className={`${
              !(touched.password && Boolean(errors.password)) &&
              classes.errorOffset
            }`}
            id="password"
            label={<Typography 
              className={classes.label}
              >Password</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: {
                input: `${classes.inputs} ${classes.inputsPassword}`,
                underline: classes.underline,
              },
              endAdornment: (
                <Typography className={classes.forgot}>Forgot?</Typography>
              ),
            }}
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ""}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <Box textAlign="center">
            <DemoUserLogin
              classes={`${classes.submit} ${classes.demoLoginBtn}`}
            />
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
                "Login"
              )}
            </Button>
          </Box>
          <div style={{ height: 95 }} />
        </form>
      )}
    </Formik>
  );
}
