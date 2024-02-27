import { Routes, Route } from "react-router-dom";
import AllDonationsScreen from "../screens/AllDonationsScreen";
import CreateDonationScreen from "../screens/CreateDonationScreen";
import DonationItemScreen from "../screens/DonationItemScreen";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AllDonationsScreen />} />
      <Route path="/create" element={<CreateDonationScreen />} />
      <Route path="/:id" element={<DonationItemScreen />} />
    </Routes>
  );
};

export default Router;
