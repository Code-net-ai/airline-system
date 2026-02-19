import React from "react";
import { useNavigate } from "react-router-dom";
import Capital from "../Product/Capital.jpg";
import Eastern from "../Product/eastern.jpg";
import Gog from "../Product/gog.jpg";
import Golden from "../Product/goldenTulip.jpg";
import Kempinski from "../Product/Kempinski.jpg";
import Royal from "../Product/Royal.jpg";
import Sejar from "../Product/sejae.jpg";

const hotels = [
  {
    id: 1,
    name: "Golden Tulip Hotel",
    location: "Accra, Ghana",
    image: Golden,
  },
  {
    id: 2,
    name: "Labadi Beach Hotel",
    location: "Accra, Ghana",
    image: Gog,
  },
  {
    id: 3,
    name: "Kempinski Hotel",
    location: "Accra, Ghana",
    image: Kempinski,
  },
  {
    id: 4,
    name: "Royal Senchi Resort",
    location: "Akosombo, Ghana",
    image: Royal,
  },
  {
    id: 5,
    name: "Sejar Hotel",
    location: "Kasoa, Ghana",
    image: Sejar,
  },
  {
    id: 6,
    name: "Capital View",
    location: "Koforidua, Ghana",
    image: Capital,
  },
  {
    id: 7,
    name: "Eastern Villa",
    location: "Amanfrom, Ghana",
    image: Eastern,
  },
  {
    id: 8,
    name: "GanGonet Villa",
    location: "Ho, Ghana",
    image: Gog,
  },
];

export default function HotelGallery() {
  const navigate = useNavigate();

  const handleBooking = (hotelId) => {
    navigate(`/hotel-reservation/${hotelId}`);
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">
        Choose Your Hotel
      </h2>
      <div className="row g-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="col-md-6 col-lg-3">
            <div
              className="card shadow-lg h-100 border-0"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onClick={() => handleBooking(hotel.id)}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="card-img-top"
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{hotel.name}</h5>
                <p className="card-text text-muted small">{hotel.location}</p>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleBooking(hotel.id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
