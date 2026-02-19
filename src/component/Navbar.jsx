import { Link } from 'react-router-dom';
import '../component/componentStyles/Navstyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Pages/Index.jsx'
// src/components/Navbar.js
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand/Logo */}
        <a className="navbar-brand" href="#">MySite</a>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Booking">Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Complain">Lodge-Complaint</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/Hotel-Reservation">Hotel Reservation</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link active bg-white text-dark " aria-current="page" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

