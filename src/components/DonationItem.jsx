import PropTypes from "prop-types";
import { Box } from "@mui/material";

const DonationItem = ({ donation }) => {
    const date = new Date(donation.date).toUTCString("en-US").slice(0, 16).toString();
  return (
    <Box className="donationItem">
      <p><b>Donors name:</b> {donation.name}</p>
      <p><b>amount:</b> {donation.amount}</p>
      <p><b>date:</b> {date}</p>
    </Box>
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
