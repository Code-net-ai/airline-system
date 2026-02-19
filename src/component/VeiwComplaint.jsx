import Footer from "./Footer";
import Navbar from "./Navbar";

export default function VeiwComplaint() {
  // 🔹 Dummy complaint data (later connect to backend)
  const complaints = [
    { id: 1, name: "John Doe", email: "john@example.com", message: "My flight was delayed for 5 hours.", date: "2025-08-29" },
    { id: 2, name: "Mary Smith", email: "mary@example.com", message: "The hotel room was not clean.", date: "2025-08-30" },
    { id: 3, name: "Kwame Mensah", email: "kwame@example.com", message: "I was overcharged for my booking.", date: "2025-09-01" },
  ];

  return (
 <div>
    <Navbar/>
       <div className="container py-4">
        
      <h2 className="text-center mb-4">User Complaints</h2>

      <div className="row">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{complaint.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{complaint.email}</h6>
                <p className="card-text">{complaint.message}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">Date: {complaint.date}</small>
                <button className="btn btn-sm btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
 </div>
  );
}
