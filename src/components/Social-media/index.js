import React from 'react'
import './social-media.css'
const SocialMedia = () => {
  return (
    <div className="social-menu">
        <ul>
            <li><a href="https://www.facebook.com/" target="blank"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/v360-technology-inc/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.youtube.com/"><i className="fab fa-youtube" target="blank"></i></a></li>
        </ul>
    </div>  
  )
}
export default SocialMedia