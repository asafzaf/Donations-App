import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, TextField } from "@mui/material";
import "../styles.css";
import { PacmanLoader } from "react-spinners";

const DonationForm = (props) => {
  const [name, setName] = useState(
    props.donation?.name ? props.donation.name : ""
  );
  const [email, setEmail] = useState(
    props.donation?.email ? props.donation.email : ""
  );
  const [amount, setAmount] = useState(
    props.donation ? props.donation.amount : ""
  );

  const [nameIsInvalid, setNameIsInvalid] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [amountIsInvalid, setAmountIsInvalid] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setName(props.donation?.name ? props.donation.name : "");
    setEmail(props.donation?.email ? props.donation.email : "");
    setAmount(props.donation ? props.donation.amount : "");
    setIsLoading(false);
  }, [props.donation]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formValidation()) return;
    const donation = {
      name: name,
      email: email,
      amount: parseInt(amount),
    };
    setIsLoading(true);
    props.onSubmit(donation);
  };

  const formValidation = () => {
    let valid = true;
    if (name === "") {
      setNameIsInvalid(true);
      valid = false;
    } else {
      setNameIsInvalid(false);
    }
    if (email === "") {
      valid = false;
      setEmailIsInvalid(true);
    } else {
      setEmailIsInvalid(false);
    }
    if (amount === "" || isNaN(amount) || amount <= 0) {
      valid = false;
      setAmountIsInvalid(true);
    } else {
      setAmountIsInvalid(false);
    }
    return valid;
  };

  const backButton = () => {
    if (props.donation) {
      return (
        <Button href={`/donation/${props.donation._id}`} variant="contained">
          Cancel
        </Button>
      );
    } else
      return (
        <Button href="/" variant="contained">
          Back
        </Button>
      );
  };

  const finishButton = () => {
    if (props.donation) {
      return (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={submitHandler}
        >
          Edit
        </Button>
      );
    } else
      return (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={submitHandler}
        >
          Create
        </Button>
      );
  };

  const date = props.donation?.date
    ? new Date(props.donation?.date)
        .toUTCString("en-US")
        .slice(0, 16)
        .toString()
    : new Date().toUTCString("en-US").slice(0, 16).toString();
  return isLoading ? (
    <PacmanLoader color="#2D9596" />
  ) : (
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
          error={nameIsInvalid}
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
          error={emailIsInvalid}
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
          datatype="integer"
          label=""
          placeholder="1000"
          value={amount}
          error={amountIsInvalid}
          onChange={(e) => setAmount(e.target.value)}
          required
        ></TextField>
      </Grid>
      <Grid item xs={12} className="field">
        <p>
          <b>Date:</b> {date}
        </p>
      </Grid>
      <Grid item xs={6} className="field">
        {backButton()}
      </Grid>
      <Grid item xs={6} className="field">
        {finishButton()}
      </Grid>
    </Grid>
  );
};
DonationForm.propTypes = {
  props: PropTypes.object,
  donation: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default DonationForm;
