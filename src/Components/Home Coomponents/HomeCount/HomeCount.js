import React from "react";
import machineImage from "../../../assets/images/home_machine.png";
import happyClientsIcon from "../../../assets/images/costumer 1.svg";
import corporateProjectsIcon from "../../../assets/images/portfolio-management 1.svg";
import governmentProjectsIcon from "../../../assets/images/management 1.svg";
function HomeCount() {
  return (
    <div className="count-container">
      <div className="image-container">
        <img
          src={machineImage}
          className="img-fluid machine-image"
          alt="Machine"
        />
      </div>
      <div className="home-count-container">
        <div className="container">
          <div className="row text-center justify-content-center client-count-list">
            <div className="col-md-4 stat-item mt-md-4">
              <img src={happyClientsIcon} alt="Happy Clients" />
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-4 stat-item mt-md-4">
              <img src={corporateProjectsIcon} alt="Corporate Projects" />
              <h3>100+</h3>
              <p>Corporate Projects</p>
            </div>
            <div className="col-md-4 stat-item mt-md-4">
              <img src={governmentProjectsIcon} alt="Government Projects" />
              <h3>30+</h3>
              <p>Government Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCount;
