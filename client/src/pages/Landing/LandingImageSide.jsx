import Box from "@mui/material/Box";
import useStyles from "./Styles/LandingImageSide";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Landing() {
  const classes = useStyles();

  return (
    <Box
      className={classes.imageSideWrapper}
      // display={{ xs: "none", lg: "block" }}
    >
      <Box p={1} className={classes.authHeader}>
        <Link href="/profile/edit">
          <Button className={`${classes.sitter} ${classes.button}`}>
            Become a sitter
          </Button>
        </Link>
        <Link href="/login">
          <Button
            variant="outlined"
            className={`${classes.login} ${classes.button}`}
          >
            Login
          </Button>
        </Link>
        <Link className={classes.link} href="/signup">
          <Button
            className={`${classes.signup} ${classes.button}`}
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
