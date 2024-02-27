import { useEffect, useState } from "react";
import { getDonationById } from "../http/http";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import "../styles.css";

const DonationItemScreen = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getDonationById(id)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        setItem({ title: "Error: " + error, description: "User not found" });
      });
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="Search Results" />
      <Box className="container">
        <p>{isLoading ? "Loading..." : null}</p>
        <Box className="item">
          <h3>
            <b>Donors Name:</b> {item.name}
          </h3>
          <p>
            <b>E-mail:</b> {item.email}
          </p>
          <p>
            <b>Amount:</b> {item.amount}
          </p>
          <p>
            <b>Date:</b>{" "}
            {new Date(item.date).toUTCString("en-US").slice(0, 16).toString()}
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default DonationItemScreen;
