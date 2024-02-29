import { Box } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import "../styles.css";
import DonationForm from "../components/DonationForm";
import { createDonation } from "../http/http";

const CreateDonationScreen = () => {
  const submitHandler = (donation) => {
    createDonation(donation)
      .then((response) => {
        const path = `/donation/${response._id}`;
        setTimeout(() => {
          window.location.href = path;
        }, 3000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="Create a new Donation" />
      <Box className="container">
        <Box className="item">
          <DonationForm onSubmit={submitHandler} />
        </Box>
      </Box>
    </div>
  );
};

export default CreateDonationScreen;
