import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../component/componentStyles/HotelReservation.css"; // custom styles

const hotelData = {
  1: { name: "Golden Tulip Hotel", location: "Accra, Ghana" },
  2: { name: "Labadi Beach Hotel", location: "Accra, Ghana" },
  3: { name: "Kempinski Hotel", location: "Accra, Ghana" },
  4: { name: "Royal Senchi Resort", location: "Akosombo, Ghana" },
  5: { name: "Sejar Hotel", location: "Kasoa, Ghana" },
  6: { name: "Capital View", location: "Koforidua, Ghana" },
  7: { name: "Eastern Villa", location: "Amanfrom, Ghana" },
  8: { name: "GanGonet Villa", location: "Ho, Ghana" },
};

export default function HotelReservation() {
  const { hotelId } = useParams();
  const [reservation, setReservation] = useState(null);
  const hotel = hotelData[hotelId];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const details = Object.fromEntries(formData.entries());
    setReservation(details);
  };

  return (
    <section className="reservation-container">
      <div className="reservation-box">
        <h2 className="title">
          {hotel ? `Reserve at ${hotel.name}` : "Hotel Reservation"}
        </h2>
        <p className="location">{hotel?.location}</p>

        {!reservation ? (
          <form onSubmit={handleSubmit} className="reservation-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullname" required />
            </div>

            <div className="form-group">
              <label>Phone / Email</label>
              <input type="text" name="contact" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Check-in</label>
                <input type="date" name="checkin" required />
              </div>
              <div className="form-group">
                <label>Check-out</label>
                <input type="date" name="checkout" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Guests</label>
                <input type="number" name="guests" min="1" required />
              </div>
              <div className="form-group">
                <label>Room Type</label>
                <select name="roomType" required>
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="suite">Suite</option>
                  <option value="deluxe">Deluxe</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Special Requests</label>
              <textarea name="requests" rows="3"></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Reserve Now
            </button>
          </form>
        ) : (
          <div className="confirmation-box">
            <h4>✅ Reservation Confirmed</h4>
            <p><strong>Hotel:</strong> {hotel?.name}</p>
            <p><strong>Guest:</strong> {reservation.fullname}</p>
            <p><strong>Contact:</strong> {reservation.contact}</p>
            <p><strong>Check-in:</strong> {reservation.checkin}</p>
            <p><strong>Check-out:</strong> {reservation.checkout}</p>
            <p><strong>Guests:</strong> {reservation.guests}</p>
            <p><strong>Room:</strong> {reservation.roomType}</p>
            <p><strong>Requests:</strong> {reservation.requests || "None"}</p>
          </div>
        )}
      </div>
    </section>
  );
}
