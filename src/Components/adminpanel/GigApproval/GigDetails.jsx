import React from "react";
import "./style.css";
const GigDetails = () => {
  return (
    <div>
      <div>
        <h1 className="dashboard-header-text">User Gig Details</h1>
      </div>
      <div className="gig-detail-outer-wrapper">
        <div className="gig-detail-inner-wrapper">
          <div className="service-header">
            <h1>I Need Plumber(Service)</h1>
            <p>25/06/2022</p>
          </div>
          <div className="category-header">
            <p>Category Plumber</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit
            </p>
          </div>
          <div className="location-header">
            <h1>Lahore</h1>
            <p>$80.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetails;
