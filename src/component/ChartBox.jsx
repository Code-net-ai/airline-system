import { Form } from "react-router-dom";
  import React, { useState } from "react";
  import '../component/componentStyles/ChartBox.css'
export default function ChartBox(){
  


  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }
    return (
        <div>
           <section className="container my-5">
      <div className="complaint-box p-4 shadow rounded bg-light">
        <h2 className="mb-4 text-center text-danger">Lodge a Complaint</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Booking Reference (Optional)</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email / Phone</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Complaint Type</label>
              <select className="form-select" required>
                <option value="">Select</option>
                <option value="delay">Flight Delay</option>
                <option value="payment">Payment Issue</option>
                <option value="service">Customer Service</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Complaint Message</label>
              <textarea className="form-control" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Submit Complaint
            </button>
          </form>
        ) : (
          <div className="text-center p-4">
            <h4 className="text-success">✅ Complaint Submitted</h4>
            <p>Thank you for your feedback. We will get back to you soon.</p>
          </div>
)}
      </div>
    </section>
  
        </div>
    )
}