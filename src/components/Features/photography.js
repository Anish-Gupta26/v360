import React from 'react'
import Divider from '../divider'
import { Link } from "react-router-dom";
import Footer from '../Footer';
import SocialMedia from '../Social-media';
import './photography.css'

const Phtography = () => {
  return (
    <>
    <Divider/>
    <div className='container'>
        <h1 className='my-4 about'>V360° Photography Service</h1>
        <button type="button" className="btn btn-md btn-outline-primary"><Link to='/' style={{color:"black", textDecoration:"none"}}>Back</Link></button>
        <div className="privacy-flex-container row" >
                <div className='privacy-flex-container-left col-lg-6'>
                    <h2>Outsource/Simplify <span className='blue-text'>Photography</span> and Technology to Us!</h2>
                </div>
                <div className='privacy-flex-container-right col-lg-6'>
                    <p> <ul>
                        <li>Top Quality and fastest V360° Photography Service in New York.</li>
                        <li>Same Day Service for upto 700 diamond</li>
                        <li>Instant V360° loading with US based Google Cloud Platform.</li>
                        <li>Ring, Pendent, Earring, Pendent photography</li>
                        <li>Malca-Amit and Brinks window pickup/drop-off </li>
                        <li>Work with all major courier Fedex, UPS, USPS and Ferrari </li>
                        <li>Quality Photography for Blue Nile, Brilliant Earth, Rapnet, VDB, Clean Origin, Green Rock, Fire Diamonds, etc. </li>
                        <li>250k stones handled since 2018 worth more than $1B.</li>
                        </ul>
                    </p>
                </div>
        </div>
        {/* <iframe title='anish' src='' class="responsive-iframe" scrolling="no" id="displayStone" frameborder="0"
      style={{width: "100%",height: "70%",borderWidth: "0px"}}>
      </iframe> */}
        <div style={{marginTop:"50px"}}><SocialMedia/></div>
        <Footer/>
    </div>
    </>
  )
}

export default Phtography