import { Button, MenuItem } from "@mui/material";
import { useAuth } from "../../context/useAuthContext";
import { useSnackBar } from "../../context/useSnackbarContext";
import { demoUser } from "../../mocks/demoUser";
import login from "../../helpers/APICalls/login";


export default function DemoUserLogin({
  isMenuItem,
  classes,
}) {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const handleDemoUserLogin = () => {
    const { email, password } = demoUser;
    login(email, password).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });
        updateSnackBarMessage("An unexpected error occurred. Please try again");
      }
    });
  };

  return (
    <>
      {isMenuItem ? (
        <MenuItem className={classes} onClick={handleDemoUserLogin}>
          Demo User
        </MenuItem>
      ) : (
        <Button
          size="large"
          className={classes}
          color="primary"
          variant="outlined"
          onClick={handleDemoUserLogin}
        >
          Demo User Login
        </Button>
      )}
    </>
  );
}
