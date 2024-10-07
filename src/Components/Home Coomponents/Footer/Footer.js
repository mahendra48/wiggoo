import React from 'react';
import '../../../assets/style/Footer.css';
import { Facebook } from 'iconsax-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Say Hello</h5>
            <p>Address: 1234 Heaven Stress, Beverly Hill OldYork- United State of Lorem</p>
            <p>Phone: 1234 5678 5576 – 4657 4657 4656</p>
            <p>Email: Support1234@OrLife</p>
            <div className="social-icons mt-3">
              <a href="#" className="social-icon"><Facebook/></a>
              <a href="#" className="social-icon"></a>
              <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-flickr"></i></a>
            </div>
          </div>
          {/* Second Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">My Account</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-secondary footer-menu">About</Link></li>
              <li><a href="#" className="text-secondary footer-menu">Advertising</a></li>
              <li><a href="#" className="text-secondary footer-menu">Business Development</a></li>
              <li><a href="#" className="text-secondary footer-menu">Careers</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Permissions</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Contact</a></li>
            </ul>
          </div>
          {/* Third Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Product</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary  footer-menu">About</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Advertising</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Business Development</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Careers</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Permissions</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Contact</a></li>
            </ul>
          </div>
          {/* Fourth Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Reader Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary  footer-menu">Advertising</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Business Development</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Careers</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Permissions</a></li>
              <li><a href="#" className="text-secondary  footer-menu">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
