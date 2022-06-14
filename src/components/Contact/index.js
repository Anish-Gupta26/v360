import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='flexi-container' id='contact'>
         <div className='flexi-item-left'>
    <div className="contact-form-wrapper d-flex justify-content-center" data-aos="zoom-in"  data-aos-duration="2000">
        <form action="https://formsubmit.co/sales@v360.studio" method="POST" className="contact-form">
        <h1 className="title">Contact us</h1>
        <p className="description text-center">Feel free to contact us if you need any assistance.
        </p>
        <div>
            <input type="text" className="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
        </div>
        <div>
            <input type="email" className="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
        </div>
        <div>
            <textarea id="message" className="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
        </div>
        <div className="submit-button-wrapper">
            <input type="submit" value="Send"/>
        </div>
        </form>
        </div>
        </div>
        <div className='flexi-item-right data-aos="zoom-in"  data-aos-duration="1500"'>
             <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2239036950923!2d-73.98134058459365!3d40.75709987932697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259cd0abb0595%3A0x4b4bd71f97a39e4c!2sV360%20Studio!5e0!3m2!1sen!2sin!4v1651672423637!5m2!1sen!2sin" width="300" height="400"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Contact