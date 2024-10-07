import React from "react";
import map from "../../../assets/images/Home/india_map.jpg";
import panMap from "../../../assets/images/Home/Pan_india.png";
import "../../../assets/style/Map.css";

function HomeMap() {
  return (
    <div className="map-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pan-ind mb-4">
            <img src={panMap} alt="Pan India" className="img-fluid mb-3" />
            <h3
              style={{
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "48px",
                textAlign: "left",
                // width: "500px",
              }}
            >
              We proudly serve clients across India
            </h3>
            <p style={{ margin: "0", textAlign: "left" }} className="pt-1 pb-4">
              Check out our service map to find a representative near you.
            </p>
            <a href="#" className="btn btn-warning mt-2">
              Contact Now
            </a>
          </div>
          <div className="col-md-6">
            <img src={map} alt="India Map" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMap;
