import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPage";
import VehicleBrandListPage from "./pages/vehicle_brands/VehicleBrandListPage";
import UserRegisterPage from "./pages/users/UserRegisterPage";
import VehicleListPage from "./pages/vehicles/VehicleListPage";
import VehicleBrandAddPage from "./pages/vehicle_brands/VehicleBrandAddPage";
import VehicleAddPage from "./pages/vehicles/VehicleAddPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/" element={<AuthLoginPage />} />
        <Route path="/register" element={<UserRegisterPage />} />
        <Route path="/brand" element={<VehicleBrandListPage />} />
        <Route path="/brand/add" element={<VehicleBrandAddPage />} />
        <Route path="/vehicle" element={<VehicleListPage />} />
        <Route path="/vehicle/add" element={<VehicleAddPage />} />

        {/* <Route path="/" element={<ContainerOutletWidget />}>
          <Route index element={<LoginPage />} />
          <Route path="/pos" element={<POSPage />} />
          <Route path="/pos/print" element={<POSPrintPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
