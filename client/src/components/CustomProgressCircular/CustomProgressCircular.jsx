import { Box, CircularProgress } from "@mui/material";

const CustomProgressCircular = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default CustomProgressCircular;
