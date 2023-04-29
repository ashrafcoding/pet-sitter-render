import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";
import Logo from "../../Images/logo.png";
import AuthMenu from "../AuthMenu/AuthMenu";
import AuthMenuDesktop from "../AuthMenuDesktop/AuthMenuDesktop";
import { useAuth } from "../../context/useAuthContext";
import { useSocket } from "../../context/useSocketContext";
import { useState, useEffect } from "react";
import { getCount } from "../../helpers/APICalls/notifications";


const AuthHeader = ({ asideText, linkTo })=> {
  const {classes} = useStyles();
  const { loggedInUser } = useAuth();
  const [count, setCount] = useState(0);
  const { socket } = useSocket();

  const updateCount = async (change) => {
    const newCount = Math.max(count - change, 0);
    setCount(newCount);
  };

  socket?.on("notification", () => {
    const newCount = count + 1;
    setCount(newCount);
  });

  useEffect(() => {
    const fetchCount = async () => {
      const success = await getCount(true);
      if (success) setCount(success["count"]);
    };
    fetchCount();
  }, []);

  return (
    <Box
      width="100%"
      height="90px"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      className={classes.authHeader}
    >
      <Link to={loggedInUser ? "/dashboard" : "/login"}>
        <img src={Logo} alt="logo" />
      </Link>

      <Box
        height="80px"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        p={1}
      >
        <AuthMenuDesktop
          asideText={asideText}
          linkTo={linkTo}
          notifCount={count}
          updateCount={updateCount}
        />
        <AuthMenu />
      </Box>
    </Box>
  );
};

export default AuthHeader;
