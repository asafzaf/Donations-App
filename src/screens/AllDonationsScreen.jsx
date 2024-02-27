import { useState, useEffect } from "react";
import { getDonations } from "../http/http";
import { Box } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import DonationItem from "../components/DonationItem";

const AllDonationsScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getDonations()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setData("Error: " + error);
      });
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="All Donations" />
      <p>{isLoading ? "Loading..." : null}</p>
      <Box className="container">
        {isLoading
          ? null
          : data.map((donation) => <DonationItem key={donation._id} donation={donation} />)}
      </Box>
    </div>
  );
};

export default AllDonationsScreen;
