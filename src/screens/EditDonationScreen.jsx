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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const editHandler = (donation) => {
    setIsLoading(true);
    updateDonation(id, donation)
      .then((response) => {
        const path = `/donation/${response._id}`;
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
      .catch((error) => {
        setErrorMessage({
          title: error.response.data.name,
          description: error.response.data.message,
        });
        setError(true);
        setIsLoading(false);
      });
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="Edit Donation" />
      <Box className="container">
        <Box className="item">
          {isLoading && <PacmanLoader color="#2D9596" />}
          {!isLoading && !error && (
            <DonationForm donation={donation} onSubmit={editHandler} />
          )}
          {!isLoading && error && (
            <Box className="item">
              <h2>{errorMessage.title}</h2>
              <p>{errorMessage.description}</p>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default EditDonationScreen;
