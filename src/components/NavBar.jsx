import "../styles.css";
import { Box } from "@mui/material";

const NavBar = () => {
    return (
        <Box className="navBar">
            <Box className="navItem">Show All Donations</Box>
            <Box className="navItem">Show Donation by id</Box>
            <Box className="navItem">create a new donation</Box>
            <Box className="navItem">update a donation</Box>
            <Box className="navItem">delete a donation</Box>
        </Box>
    );
    }
    export default NavBar;