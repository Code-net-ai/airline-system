export default function AdminMainboard() {
  return (
    <div>
      <h2 className="text-primary mb-4">Admin Dashboard</h2>
      <p className="mb-4">Welcome, Admin! 👋</p>

      <div className="row">
        {/* Reservations Card */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-3 p-4 mb-4">
            <h5 className="fw-bold text-dark">Reservations</h5>
            <p>View and manage hotel/flight bookings.</p>
            <button className="btn btn-outline-primary w-100">
              View Reservations
            </button>
          </div>
        </div>

        {/* Complaints Card */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-3 p-4 mb-4">
            <h5 className="fw-bold text-dark">Complaints</h5>
            <p>Read and respond to customer complaints.</p>
            <button className="btn btn-outline-danger w-100">
              View Complaints
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
