import React from 'react'
import Divider from '../divider'
import { Link } from "react-router-dom";
import Footer from '../Footer';
import SocialMedia from '../Social-media';

const Logistics = () => {
  return (
    <>
    <Divider/>
    <div className='container'>
        <h1 className='my-4 about'>Diamond Logistical Handling</h1>
        <button type="button" className="btn btn-md btn-outline-primary"><Link to='/' style={{color:"black", textDecoration:"none"}}>Back</Link></button>
        <div className="privacy-flex-container row" >
                <div className='privacy-flex-container-left col-lg-6'>
                    <h2>Why do <span className='blue-text'>New York</span>  expense and overhead</h2>
                </div>
                <div className='privacy-flex-container-right col-lg-6'>
                    <p> <ul>
                    <li>Secure and Reliable Inventory handling in New York City.</li>
                    <li>$10M+ Insured, with Malca-Amit/Brinks in the same building.</li>
                    <li>Can handle Fedex/UPS/USPS/Malca-Amit/Brinks shipments. </li>
                    <li>No need for US based</li>
                    </ul>
                    </p>
                </div>
        </div>
        <div style={{marginTop:"50px"}}><SocialMedia/></div>
        <Footer/>
    </div>
    </>
  )
}

export default Logistics

