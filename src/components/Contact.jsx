import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
  <h1>Contact Us</h1>
  <p>Have questions or opportunities? Reach out to us.</p>

  <div className="contact-container">
    <div className='contact-wrapper'>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required ></textarea>
      <button type="submit">Send Message</button>
    </form>
    </div>

    <div className="contact-info">
      <h3>Get In Touch</h3>
      <p>Email: ghosharnab436@gmail.com</p>
      <p>Location: Memari,Purba Bardhaman, India</p>
    </div>

  </div>
</section>
  )
}

export default Contact
