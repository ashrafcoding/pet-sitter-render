import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Layout from "../Layout/Layout";

const TempDashboardMain = () => {
  return (
    <Layout>
      <Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography component="h5" variant="h5" align="center">
            Temporary Dashboard Main Content
          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
};

export default TempDashboardMain;
