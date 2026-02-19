import Navbar from '../component/Navbar';
import React, { useState } from "react";
import '../component/componentStyles/Booking.css';
import kotoka from "../Product/Kotoka.jpg";
import Footer from '../component/Footer';
import PaymentSystem from '../component/PaymentSystem';

export default function Booking() {
  const [available, setAvailable] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const from = e.target.from.value.trim().toLowerCase();
    const to = e.target.to.value.trim().toLowerCase();

    if (from === "" || to === "") {
      setAvailable(null);
    } else if (from === to) {
      setAvailable(false);
    } else {
      setAvailable(true);
    }
  };

  return (
    <div>
      <Navbar />

      {/* ✅ Hero Section with background image */}
      <section
        className="booking-hero text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${kotoka})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <div>
          <h1 className="display-5 fw-bold">Flight Booking</h1>
          <p className="lead">Enter your details and check availability</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="container my-5">
        <form className="p-4 shadow rounded bg-light booking-form" onSubmit={handleSearch}>
          {/* Passenger Info */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="fullname" className="form-control" placeholder="Enter your name" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Telephone</label>
            <input type="tel" name="phone" className="form-control" placeholder="Enter your phone number" required />
          </div>

          {/* Flight Info */}
          <div className="mb-3">
            <label className="form-label">From</label>
            <input type="text" name="from" className="form-control" placeholder="Departure City" required />
          </div>

          <div className="mb-3">
            <label className="form-label">To</label>
            <input type="text" name="to" className="form-control" placeholder="Arrival City" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Departure Date</label>
            <input type="date" name="departure" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Return Date</label>
            <input type="date" name="return" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Passengers</label>
            <input type="number" name="passengers" className="form-control" min="1" defaultValue="1" />
          </div>

          <div className="mb-3">
            <label className="form-label">Class</label>
            <select className="form-select" name="class">
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">Check Availability</button>
          </div>
        </form>
      </section>

      {/* Availability Result */}
      {/* Availability Result */}
{available !== null && (
  <section className="container text-center my-4">
    {available ? (
      <>
        <div className="alert alert-success fw-bold">✅ Flight is available!</div>
        {/* Render Payment System */}
        <PaymentSystem
          bookingDetails={{
            fullname: document.querySelector("[name='fullname']")?.value,
            phone: document.querySelector("[name='phone']")?.value,
            from: document.querySelector("[name='from']")?.value,
            to: document.querySelector("[name='to']")?.value,
            departure: document.querySelector("[name='departure']")?.value,
            returnDate: document.querySelector("[name='return']")?.value,
            passengers: document.querySelector("[name='passengers']")?.value,
            classType: document.querySelector("[name='class']")?.value,
          }}
        />
      </>
    ) : (
      <div className="alert alert-danger fw-bold">❌ No flights available for the selected route.</div>
    )}
  </section>
)}

    
      <Footer/>
    </div>
  );
}
