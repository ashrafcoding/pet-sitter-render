import { Button, TextField, CircularProgress } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useConvo } from "../../../../context/useConvoContext";
import useStyles from "./useStyles";

const InputMessage = ({ conversationId, recipientProfileId }) => {
  const {classes} = useStyles();
  const { sendMessageContenxt } = useConvo();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await sendMessageContenxt(values);
    setSubmitting(false);
    resetForm({
      values: {
        conversationId,
        text: "",
        recipientProfileId,
        recipientRead: false,
      },
    });
  };

  return (
    <Formik
      initialValues={{
        conversationId,
        text: "",
        recipientProfileId,
        recipientRead: false,
      }}
      validationSchema={Yup.object().shape({
        text: Yup.string().required("Text is required"),
      })}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} noValidate className={classes.form}>
          <TextField
            className={classes.input}
            id="text"
            fullWidth
            name="text"
            autoComplete="text"
            helperText={touched.text ? errors.text : ""}
            error={touched.text && Boolean(errors.text)}
            value={values.text}
            onChange={handleChange}
            placeholder="Send Message"
          />

          <Button
            type="submit"
            size="medium"
            variant="contained"
            color="primary"
            className={classes.sendBtn}
          >
            {isSubmitting ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Send"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default InputMessage;
