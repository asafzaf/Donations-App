import { Box } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import "../styles.css";
import DonationForm from "../components/DonationForm";

const CreateDonationScreen = () => {

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="Create a new Donation" />
      <Box className="container">
        <Box className="item">
          <DonationForm />
        </Box>
      </Box>
    </div>
  );
};

export default CreateDonationScreen;
