import React from "react";
import { Link } from "react-router-dom";

export default function Footer (){
    return( 
        <div>
        


    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo / About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">SkyFly Airlines</h5>
            <p>
              Your trusted airline for safe, affordable, and comfortable travel
              across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li> <Link className="nav-link active" aria-current="page" to="/Booking">Booking</Link>
              </li>
              <li>
                <Link className="nav-link active" aria-current="page" to="/Complain">Lodge-Complaint</Link>
              </li>
              <li>
                 <Link className="nav-link active" aria-current="page" to="/Hotel-Reservation">Hotel Reservation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <p>Email:📧 support@skyfly.com</p>
            <p>Phone:📞 +233 123 456 789</p>
            <p>Location: Accra, Ghana</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center border-top border-light pt-3">
          <small>© {new Date().getFullYear()} SkyFly Airlines. All Rights Reserved.</small>
        </div>
      </div>
    </footer>


        </div>
    )
}