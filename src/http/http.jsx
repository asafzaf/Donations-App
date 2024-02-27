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
    return response.data.data.donation;
}

const createDonation = async (donation) => {
    const response = await http.post("/api/donations/items", donation);
    return response.data.data.donation;
}

const updateDonation = async (id, donation) => {
    const response = await http.put(`/api/donations/items/${id}`, donation);
    return response.data.data.donation;
}

const deleteDonation = async (id) => {
    const response = await http.delete(`/api/donations/items/${id}`);
    return response.data.data.donation;
}

export {getDonations, getDonationById, createDonation, updateDonation, deleteDonation};