import { useEffect, useState } from "react";
import { getDonationById } from "../http/http";
import { NavLink, useParams } from "react-router-dom";
import { Box, Button, Modal, Typography } from "@mui/material";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

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
      <Modal
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Before deleting...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this donation?
          </Typography>
          <Box sx={{direction: 'row', alignItems: 'center'}}>
            <Button onClick={deleteHandler}>Yes</Button>
            <Button onClick={handleCloseModal}>No</Button>
          </Box>
        </Box>
      </Modal>
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
              <DeleteIcon className="iconButton" onClick={handleOpenModal} />
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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F1FADA",
  border: "2px solid #2D9596",
  boxShadow: 24,
  p: 4,
};

export default DonationItemScreen;
