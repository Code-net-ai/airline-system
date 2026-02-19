import React from "react";
import FlightSearchForm from "./componentStyles/FlightSearchForm";
import "../component/componentStyles/Navstyle.css";
import FlyingCommercialPlane from "../Product/FlyingCommercialPlane.jpg";


export default function HomePic() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${FlyingCommercialPlane})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>

        {/* Centered content */}
        <div className="position-relative text-center px-3" style={{ maxWidth: "800px", zIndex: 2 }}>
          <h1 className="display-3 fw-bold">Welcome to SkyFly Airlines</h1>
          <p className="lead mt-3">Book your next journey with comfort and ease</p>

          {/* Flight Search Form INSIDE Hero */}
          <div className="d-flex justify-content-center mt-4">
            <div className="bg-white rounded shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
              <FlightSearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 shadow rounded bg-white h-100">
              <h2 className="fw-bold">Special Deal to London</h2>
              <p>From $299 this summer</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow rounded bg-white h-100">
              <h2 className="fw-bold">Student Discounts</h2>
              <p>Up to 20% off for students</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow rounded bg-white h-100">
              <h2 className="fw-bold">Weekend Getaways</h2>
              <p>Escape now with our weekend offers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
