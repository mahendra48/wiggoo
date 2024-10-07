import React from "react";
import "../../../assets/style/HomeContact.css";
import contactImage from "../../../assets/images/Home/Home_contact.png"; 
import yellowBackground from "../../../assets/images/Vector 6 (1).png";

function HomeContact() {
  return (
    <div
      className="home-contact-section"
      style={{
        backgroundImage: `url(${yellowBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={contactImage} alt="Machine" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              <strong>
                Transform your cleaning routine with Wiggo Automation's
                state-of-the-art cleaning equipment. Contact us today to learn
                more about our products and services.
              </strong>
            </p>
            <a href="#" className="btn btn-dark">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
