import "../styles.css";
import { useState } from "react";
import { Box, Input } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [serachString, setSearchString] = useState("");

  return (
    <Box className="navBar">
      <NavLink component="button" to="/" style={{ textDecoration: "none" }}>
        <Box className="navItem">Show All Donations</Box>
      </NavLink>
      <NavLink
        component="button"
        to="/create"
        style={{ textDecoration: "none" }}
      >
        <Box className="navItem">Create a new donation</Box>
      </NavLink>
      <Box className="searchBar">
        <Input
          style={{
            width: "100%",
            color: "white",
            hover: "white",
            focus: "white",
          }}
          type="text"
          disableUnderline={true}
          placeholder="Search by id..."
          onChange={(e) => setSearchString(e.target.value)}
        />
      </Box>
      <NavLink content="button" to={`/${serachString}`}  state={{ id: serachString }} style={{ textDecoration: "none" }}>
        <Box className="navItem">Search</Box>
      </NavLink>
    </Box>
  );
};
export default NavBar;
