import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const DonationItem = ({ donation }) => {
  const date = new Date(donation.date)
    .toUTCString("en-US")
    .slice(0, 16)
    .toString();
  return (
    <NavLink to={`/${donation._id}`} style={{ textDecoration: "none", color:'black' }}>
      <Box className="donationItem">
        <p>
          <b>Donors name:</b> {donation.name}
        </p>
        <p>
          <b>amount:</b> {donation.amount}
        </p>
        <p>
          <b>date:</b> {date}
        </p>
      </Box>
    </NavLink>
  );
};
DonationItem.propTypes = {
  donation: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default DonationItem;
