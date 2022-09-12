import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <i className="fas fa-dollar-sign" /> ECOM
      </div>
      <div className="footer-top">
        <div className="footer-links">
          <ul>
            <li className="footer-links-head">Company</li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                {" "}
                About Us
              </Link>
            </li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                Work here
              </Link>
            </li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                Team
              </Link>
            </li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                Stories
              </Link>
            </li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                Affiliate
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="footer-links-head">Customer Support</li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                {" "}
                Customer Service
              </Link>
            </li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                Need a Repair
              </Link>
            </li>
            <li className="footer-link">
              <Link to="/" className="link">
                Warrenty
              </Link>
            </li>
            <li className="footer-link">
              {" "}
              <Link to="/" className="link">
                FAQs
              </Link>
            </li>
            <li className="footer-link">
              <Link to="/" className="link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="footer-links-head">Order & Returns</li>
            <li className="footer-link">
              <Link to="/" className="link">
                Shipping
              </Link>
            </li>
            <li className="footer-link">
              <Link to="/" className="link">
                Returns
              </Link>
            </li>
            <li className="footer-link">
              <Link to="/" className="link">
                Promotions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
            <span className="handle">/EcomPakistan</span>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
            <span className="handle">/Ecom.Pakistan</span>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
            <span className="handle">/Ecom_Pakistan</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
