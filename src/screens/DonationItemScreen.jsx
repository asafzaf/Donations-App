import { useEffect, useState } from "react";
import { getDonationById } from "../http/http";
import { NavLink, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import "../styles.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDonation } from "../http/http";
import { PacmanLoader } from "react-spinners";

const DonationItemScreen = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getDonationById(id)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        setErrorMessage({
          title: error.response.data.name,
          description: error.response.data.message,
        });
        setError(true);
      });
    setIsLoading(false);
  }, [id]);

  const deleteHandler = () => {
    setIsLoading(true);
    deleteDonation(id)
      .then(() => {
        const path = "/";
        setTimeout(() => {
          window.location.href = path;
        });
      }, 3000)
      .catch((error) => setError(error));
  };

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="Search Results" />
      <Box className="container">
        {isLoading && (
          <Box className="item">
            <PacmanLoader color="#2D9596" />
          </Box>
        )}
        {!isLoading && !error && (
          <Box className="item">
            <Box className="sideButtons">
              <NavLink
                to={`/edit/${id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <EditIcon className="iconButton" />
              </NavLink>

              <DeleteIcon className="iconButton" onClick={deleteHandler} />
            </Box>
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
        )}
        {!isLoading && error && (
          <Box className="item">
            <h3>{errorMessage.title}</h3>
            <p>{errorMessage.description}</p>
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              <Button>Go back to home</Button>
            </NavLink>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default DonationItemScreen;
