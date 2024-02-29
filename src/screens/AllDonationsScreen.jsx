import { useState, useEffect } from "react";
import { getDonations } from "../http/http";
import { Box } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import DonationItem from "../components/DonationItem";
import { PacmanLoader } from "react-spinners";

const AllDonationsScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getDonations()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setErrorMessage("Error: " + error);
        setError(true);
        setIsLoading(false);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="All Donations" />
      <Box className="container">
        {isLoading && <PacmanLoader color="#2D9596" />}
        {!isLoading &&
          !error &&
          data.map((donation) => (
            <DonationItem key={donation._id} donation={donation} />
          ))}
        {!isLoading && error && <Box className="item">{errorMessage}</Box>}
      </Box>
    </div>
  );
};

export default AllDonationsScreen;
