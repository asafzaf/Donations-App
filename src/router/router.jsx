import { Routes, Route } from "react-router-dom";
import AllDonationsScreen from "../screens/AllDonationsScreen";
import CreateDonationScreen from "../screens/CreateDonationScreen";
import DonationItemScreen from "../screens/DonationItemScreen";
import EditDonationScreen from "../screens/EditDonationScreen";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AllDonationsScreen />} />
      <Route path="/create" element={<CreateDonationScreen />} />
      <Route path="/:id" element={<DonationItemScreen />} />
      <Route path="/edit/:id" element={<EditDonationScreen />} />
    </Routes>
  );
};

export default Router;
