import React from "react";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

    
        <div className="footer-box">

          <h2 className="footer-logo">
            JOB_ADDA
          </h2>

          <p>
            Your trusted job portal for finding dream jobs,
            building careers, and connecting with top companies.
          </p>

        </div>

    
        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#jobs">Jobs</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>

      
        <div className="footer-box">

          <h3>Contact</h3>

          <p>📧 ghosharnab436@gmail.com</p>
          <p>📍 Memari, Purba Bardhaman</p>
          <p>📞 +91 7001051436</p>

        </div>


        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="footer-socials">

            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>

          </div>

        </div>

      </div>

    
      <div className="footer-bottom">

        <p>
          © 2026 JOB_ADDA | All Rights Reserved
        </p>

      </div>

    </footer>
  );
};

export default Footer;