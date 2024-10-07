import React from "react";
import { Link } from "react-router-dom";
import polishing_machine from "../../../assets/images/Product/Product Category/Polishing Machine.jpg";
import scrubber from "../../../assets/images/Product/Product Category/Scrubber.jpg";
import sweeper from "../../../assets/images/Product/Product Category/Sweeper.jpg";
import carpet_clean from "../../../assets/images/Product/Product Category/carpat-cleaning-machine.jpg";
import vacuum from "../../../assets/images/Product/Product Category/VACUUM.jpg";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg home-navbar border">
      <div className="container-fluid">
        <Link className="nav-link d-lg-none" aria-current="page" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                About Wiggo
              </a>
            </li>
            <li className="nav-item dropdown text-dark">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product Category
              </a>
              <div className="dropdown-menu product-dropdown">
                <div className="product-box d-none d-lg-flex">
                  <Link
                    className="text-decoration-none"
                    to="/category/polishing-machine"
                  >
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        src={polishing_machine}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-text no-link-color">
                          Polishing Machine
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    to="/category/scrubber"
                  >
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        src={scrubber}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-text">Scrubber</p>
                      </div>
                    </div>
                  </Link>
                  <Link className="text-decoration-none" to="/category/sweeper">
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        src={sweeper}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-text">Sweeper</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    to="/category/carpet-cleaners"
                  >
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        src={carpet_clean}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-text">Carpet Cleaners</p>
                      </div>
                    </div>
                  </Link>
                  <Link className="text-decoration-none" to="/category/vacuum">
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        src={vacuum}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-text">Vacuum</p>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* List view for mobile */}
                <ul className="product-list d-lg-none list-group list-group-flush list-unstyled m-0">
                  <li>
                    <Link
                      className="dropdown-item list-group-item"
                      to="/category/polishing-machine"
                    >
                      Polishing Machine
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item list-group-item"
                      to="/category/scrubber"
                    >
                      Scrubber
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item list-group-item"
                      to="/category/sweeper"
                    >
                      Sweeper
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item list-group-item"
                      to="/category/carpet-cleaners"
                    >
                      Carpet Cleaners
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item list-group-item"
                      to="/category/vacuum"
                    >
                      Vacuum
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Case Studies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
