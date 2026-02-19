import React, { useState } from "react";

export default function FlightSearchForm() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching flights with:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-light shadow rounded mx-auto"
      style={{ maxWidth: "400px" }}
    >
      <div className="mb-3">
        <input
          type="text"
          name="from"
          placeholder="From (City/Airport)"
          value={formData.from}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="to"
          placeholder="To (City/Airport)"
          value={formData.to}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          name="passengers"
          min="1"
          value={formData.passengers}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Search Flights
      </button>
    </form>
  );
}
