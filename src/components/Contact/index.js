import React, { useEffect } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
//Contact us section
const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <div
      className="flexi-container"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flexi-item-left">
        <div className="contact-form-wrapper d-flex justify-content-center">
          <iframe title='contact' src="https://docs.google.com/forms/d/e/1FAIpQLSfeEOKTUV62-ud31306W7yCpkYo178cCnfuZMkkVqErr3gm7A/viewform?embedded=true" width="450" height="540" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
      <div className='flexi-item-right data-aos="zoom-in"  data-aos-duration="1500"'>
        <h5>
          <i className="fa-solid fa-location-dot"></i> 580 5th Avenue, Suite
          421,New York, NY 10036
        </h5>
        <iframe
          title="address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2239036950923!2d-73.98134058459365!3d40.75709987932697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259cd0abb0595%3A0x4b4bd71f97a39e4c!2sV360%20Studio!5e0!3m2!1sen!2sin!4v1651672423637!5m2!1sen!2sin"
          width="300"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
