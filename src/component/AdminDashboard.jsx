import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container py-4">
        <h2 className="text-primary mb-4">Admin Dashboard</h2>
        <p className="mb-4">Welcome, Admin! 👋</p>

        <div className="row">
          {/* Reservations Card */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-dark">Reservations</h5>
              <p>View and manage hotel/flight bookings.</p>
              <button
                className="btn btn-outline-primary w-100"
                onClick={() => navigate("/admin/reservations")}
              >
                View Reservations
              </button>
            </div>
          </div>

          {/* Complaints Card */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-dark">Complaints</h5>
              <p>Read and respond to customer complaints.</p>
              <button
                className="btn btn-outline-danger w-100"
                onClick={() => navigate("/admin/complaints")}
              >
                View Complaints
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
