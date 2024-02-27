import { useEffect, useState } from "react";
import { getDonationById } from "../http/http";
import { NavLink, useParams } from "react-router-dom";
import { Box } from "@mui/material";
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

  const deleteHandler = () => {
    setIsLoading(true);
    console.log("Delete");
    deleteDonation(id)
      .then(() => {
        const path = "/";
        setTimeout(() => {
          window.location.href = path;
        });
      }, 3000)
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header />
      <NavBar />
      <Title title="Search Results" />
      <Box className="container">
        {isLoading ? (
          <PacmanLoader color="#2D9596" />
        ) : (
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
      </Box>
    </div>
  );
};

export default DonationItemScreen;
