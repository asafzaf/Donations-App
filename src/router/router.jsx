import { createBrowserRouter } from "react-router-dom";
import AllDonationsScreen from "../screens/AllDonationsScreen";
import CreateDonationScreen from "../screens/CreateDonationScreen";
import DonationItemScreen from "../screens/DonationItemScreen";
import EditDonationScreen from "../screens/EditDonationScreen";
import NotFoundScreen from "../screens/NotFoundScreen";


const Routes = createBrowserRouter([
  { path: "/", element: <AllDonationsScreen /> },
  { path: "/create", element: <CreateDonationScreen /> },
  { path: "/donation/:id", element: <DonationItemScreen /> },
  { path: "/edit/:id", element: <EditDonationScreen /> },
  { path: "*", element: <NotFoundScreen />},
]);

export default Routes;
