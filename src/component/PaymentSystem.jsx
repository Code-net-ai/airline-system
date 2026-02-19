import React, { useState } from "react";

export default function PaymentSystem({ bookingDetails }) {
  const [method, setMethod] = useState("card"); // default is card

  return (
    <section className="container my-5 d-flex justify-content-center">
      <div className="p-4 shadow-lg rounded bg-white border border-light" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="mb-4 text-center text-primary fw-bold">💳 Payment System</h2>

        {/* Booking Summary */}
        <div className="mb-4 p-3 rounded bg-light border">
          <h5 className="fw-bold text-secondary mb-3">Booking Summary</h5>
          <p><strong>Passenger:</strong> {bookingDetails.fullname}</p>
          <p><strong>Phone:</strong> {bookingDetails.phone}</p>
          <p><strong>From:</strong> {bookingDetails.from}</p>
          <p><strong>To:</strong> {bookingDetails.to}</p>
          <p><strong>Departure:</strong> {bookingDetails.departure}</p>
          <p><strong>Return:</strong> {bookingDetails.returnDate || "One-way"}</p>
          <p><strong>Passengers:</strong> {bookingDetails.passengers}</p>
          <p><strong>Class:</strong> {bookingDetails.classType}</p>
        </div>

        {/* Payment Method Selector */}
        <h5 className="fw-bold text-secondary mb-3">Choose Payment Method</h5>
        <div className="d-flex gap-2 mb-4">
          <button
            className={`btn ${method === "card" ? "btn-primary" : "btn-outline-primary"} flex-fill`}
            onClick={() => setMethod("card")}
            type="button"
          >
            💳 Card
          </button>
          <button
            className={`btn ${method === "momo" ? "btn-success" : "btn-outline-success"} flex-fill`}
            onClick={() => setMethod("momo")}
            type="button"
          >
            📱 Mobile Money
          </button>
          <button
            className={`btn ${method === "paypal" ? "btn-info text-white" : "btn-outline-info"} flex-fill`}
            onClick={() => setMethod("paypal")}
            type="button"
          >
            🌍 PayPal
          </button>
        </div>

        {/* Render Payment Form */}
        <form className="mt-3">
          {method === "card" && (
            <>
              <div className="mb-3">
                <label className="form-label fw-semibold">Card Number</label>
                <input type="text" className="form-control form-control-md" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Expiry Date</label>
                  <input type="text" className="form-control form-control-md" placeholder="MM/YY" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">CVV</label>
                  <input type="password" className="form-control form-control-md" placeholder="123" />
                </div>
              </div>
            </>
          )}

          {method === "momo" && (
            <>
              <div className="mb-3">
                <label className="form-label fw-semibold">Mobile Number</label>
                <input type="text" className="form-control form-control-md" placeholder="e.g. 024 123 4567" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Network</label>
                <select className="form-select form-select-md">
                  <option>MTN</option>
                  <option>Vodafone</option>
                  <option>AirtelTigo</option>
                </select>
              </div>
            </>
          )}

          {method === "paypal" && (
            <div className="alert alert-info text-center">
              You will be redirected to <strong>PayPal</strong> to complete payment.
            </div>
          )}

          <button type="submit" className="btn btn-success btn-lg w-100 shadow-sm mt-3">
            ✅ Pay Now
          </button>
        </form>
      </div>
    </section>
  );
}
