import axios from "axios";

export const http = axios.create({
  baseURL: "https://donations-express.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
});

const getDonations = async () => {
    const response = await http.get("/api/donations/records");
    return response.data.data.donations;

};

const getDonationById = async (id) => {
    const response = await http.get(`/api/donations/items/${id}`);
    console.log("getbyid: " + id);
    console.log(response.data.data.donation);
    return response.data.data.donation;
}

export {getDonations, getDonationById};