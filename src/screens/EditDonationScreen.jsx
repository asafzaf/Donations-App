import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import "../styles.css";
import DonationForm from "../components/DonationForm";
import { getDonationById } from "../http/http";
import { useParams } from "react-router-dom";

const EditDonationScreen = () => {
    const [donation, setDonation] = useState({});
    const [isLoading, setIsLoading] = useState(true);

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
            {isLoading ? "Loading..." : <DonationForm donation={donation} />}
        </Box>
      </Box>
    </div>
  );
};

export default EditDonationScreen;
