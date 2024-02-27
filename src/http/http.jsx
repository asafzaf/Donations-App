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

export {getDonations};