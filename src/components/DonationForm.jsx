import { useState } from "react";
import PropTypes from "prop-types";
import { Grid, TextField } from "@mui/material";
import "../styles.css";

const DonationForm = (props) => {
  const [name, setName] = useState(
    props.donation.name ? props.donation.name : "1"
  );
  const [email, setEmail] = useState(
    props.donation.email ? props.donation.email : "2"
  );
  const [amount, setAmount] = useState(
    props.donation.amount ? props.donation.amount : "3"
  );

  const date = props.donation?.date
    ? new Date(props.donation?.date)
        .toUTCString("en-US")
        .slice(0, 16)
        .toString()
    : new Date().toUTCString("en-US").slice(0, 16).toString();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} className="field">
        <p>
          <b>Donors Name:</b>
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="field">
        <TextField
          name="name"
          datatype="text"
          label="Donors Name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></TextField>
      </Grid>
      <Grid item xs={12} md={6} className="field">
        <p>
          <b>E-mail:</b>
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="field">
        <TextField
          datatype="email"
          label="E-mail"
          placeholder="John@Doe.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></TextField>
      </Grid>
      <Grid item xs={12} md={6} className="field">
        <p>
          <b>Amount:</b>
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="field">
        <TextField
          datatype="number"
          label="Amount"
          placeholder="1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        ></TextField>
      </Grid>
      <Grid item xs={12} className="field">
        <p>
          <b>Date:</b> {date}
        </p>
      </Grid>
    </Grid>
  );
};
DonationForm.propTypes = {
  props: PropTypes.object,
  donation: PropTypes.object,
};

export default DonationForm;