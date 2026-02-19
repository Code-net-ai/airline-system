import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import Booking from "./Pages/Booking";
import Complain from "./Pages/Complain";
import HotelRevation from "./Pages/HotelResevation";
import HotelReservation from "./component/HotelReservationBooking";



import "./App.css";
import Admin from "./Pages/Admain";
import AdminDashboard from "./component/AdminDashboard";
import VeiwReservations from "./component/VeiwReservations";
import VeiwComplaint from "./component/VeiwComplaint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/hotel-reservation" element={<HotelRevation />} />
        <Route
          path="/hotel-reservation/:hotelId"
          element={<HotelReservation />}
        />

  <  Route path="/admin" element={<Admin/>}/>
  <  Route path="/admin/dashboard" element={<AdminDashboard/>}/>
  <Route path="/admin/reservations" element={<VeiwReservations />} />
<Route path="/admin/complaints" element={<VeiwComplaint/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
