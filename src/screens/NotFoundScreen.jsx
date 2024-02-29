import { Box, Button } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";

const NotFoundScreen = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Title title="All Donations" />
      <Box className="container">
        <Box className="item">
          <h3>Oh no... You lost the way (404)</h3>
          <Button href="/" variant="contained">
            Go back home
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default NotFoundScreen;
