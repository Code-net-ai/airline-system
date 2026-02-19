import Footer from "./Footer";
import Navbar from "./Navbar";

export default function VeiwReservations() {
  // 🔹 Dummy data (later you can fetch from backend)
  const flightReservations = [
    { id: 1, name: "John Doe", flight: "Accra → Lagos", date: "2025-09-10" },
    { id: 2, name: "Mary Smith", flight: "Kumasi → Dubai", date: "2025-09-15" },
  ];

  const hotelReservations = [
    { id: 1, name: "Kwame Mensah", hotel: "Golden Tulip", date: "2025-09-05" },
    { id: 2, name: "Ama Boateng", hotel: "Labadi Beach Hotel", date: "2025-09-08" },
  ];

  // 🔹 Handle Approve/Disapprove
  const handleAction = (type, id, category) => {
    alert(`${type} reservation #${id} in ${category}`);
  };

  return (
    <div>
        <Navbar/>
          <div className="container py-4">
      <h2 className="text-center mb-4">Reservations</h2>
      <div className="row">
        
        {/* Flight Reservations */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-info text-white">
              <h5>Flight Reservations</h5>
            </div>
            <div className="card-body">
              {flightReservations.map((res) => (
                <div key={res.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
                  <div>
                    <strong>{res.name}</strong> <br />
                    {res.flight} <br />
                    <small>{res.date}</small>
                  </div>
                  <div>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleAction("Approved", res.id, "Flight")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleAction("Disapproved", res.id, "Flight")}
                    >
                      Disapprove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hotel Reservations */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h5>Hotel Reservations</h5>
            </div>
            <div className="card-body">
              {hotelReservations.map((res) => (
                <div key={res.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
                  <div>
                    <strong>{res.name}</strong> <br />
                    {res.hotel} <br />
                    <small>{res.date}</small>
                  </div>
                  <div>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleAction("Approved", res.id, "Hotel")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleAction("Disapproved", res.id, "Hotel")}
                    >
                      Disapprove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  <Footer/>
    </div>
  );
}
