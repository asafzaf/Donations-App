import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import "../styles.css";
import DonationForm from "../components/DonationForm";
import { getDonationById } from "../http/http";
import { useParams } from "react-router-dom";
import { updateDonation } from "../http/http";
import { PacmanLoader } from "react-spinners";

const EditDonationScreen = () => {
  const [donation, setDonation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const editHandler = (donation) => {
    setIsLoading(true);
    updateDonation(id, donation)
      .then((response) => {
        const path = `/${response._id}`;
        setTimeout(() => {
          window.location.href = path;
        }, 3000);
      })
      .catch((error) => console.log(error));
  };

  const { id } = useParams();

  useEffect(() => {
    getDonationById(id)
      .then((response) => setDonation(response))
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="Edit Donation" />
      <Box className="container">
        <Box className="item">
          {isLoading ? <PacmanLoader color="#2D9596" /> : <DonationForm donation={donation} onSubmit={editHandler}/>}
        </Box>
      </Box>
    </div>
  );
};

export default EditDonationScreen;
