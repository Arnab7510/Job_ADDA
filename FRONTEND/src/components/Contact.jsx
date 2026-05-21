import React from "react";


const Contact = () => {
  return (
    <section id="contact" className="contact">

    
      <div className="contact-heading">

        <h1>Contact Us</h1>

        <p>
          Have questions, feedback, or job opportunities?
          We'd love to hear from you.
        </p>

      </div>

  
      <div className="contact-container">

        
        <div className="contact-wrapper">

          <form className="contact-form">

            <div className="input-box">
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="input-box">
              <textarea
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>

          </form>

        </div>

      
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            📧 <strong>Email:</strong>
            <br />
            ghosharnab436@gmail.com
          </p>

          <p>
            📍 <strong>Location:</strong>
            <br />
            Memari, Purba Bardhaman, India
          </p>

          <p>
            📞 <strong>Phone:</strong>
            <br />
            +91 7001051436
          </p>

          <div className="social-links">

            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;