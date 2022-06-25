import React from 'react'
import Divider from '../divider'
import { Link } from "react-router-dom";
import Footer from '../Footer';
import SocialMedia from '../Social-media';

const Anlytics = () => {
    const image1 = require('../../assets/images/Analytics.png')
    const image2 = require('../../assets/images/Analytics2.png')
  return (
    <>
    <Divider/>
    <div className='container'>
        <h1 className='my-4 about'>Industry Stock Analysis using AI/Big Data & Tech Consulting</h1>
        <button type="button" className="btn btn-md btn-outline-primary"><Link to='/' style={{color:"black", textDecoration:"none"}}>Back</Link></button>
        <div className="privacy-flex-container row" >
                <div className='privacy-flex-container-left col-lg-6'>
                    <h2>Diamond <span className='blue-text'>Inventory </span> Stock Analysis</h2>
                </div>
                <div className='privacy-flex-container-right col-lg-6'>
                    <p> <ul>
                    <li>Quick Analysis: Save time and get analysis done within 15-30 minutes.</li>
                    <li>Focus on Business, leave Diamond Stock analysis to tech expert.</li>
                    <li>You don't need to be Excel Expert to make Diamond Business Decision.</li>
                    </ul>
                    <img src={image2} className="img-fluid" alt=""/>
                    </p>
                </div>
        </div>
        <div className="privacy-flex-container row" >
                <div className='privacy-flex-container-left col-lg-6'>
                    <h2>Make selection from <span className='blue-text'>100k+</span> vendor inventory files within minutes!</h2>
                </div>
                <div className='privacy-flex-container-right col-lg-6'>
                    <p> <ul>
                    <li>We find your selection from thousands of diamonds in minutes.</li>
                    <li>Get input from multiple vendors, Blue Nile, Rapnet, VDB, etc.</li>
                    <li>Get details here: <a target='__blank' href='https://docs.google.com/presentation/d/1YKjaMB2znOpKzyj-SimYvXOru3A8G2Ee1TKF-Tza_0E/edit#slide=id.gf3148104a2_0_17'>Link</a></li>
                    </ul>
                    <img src={image1} className="img-fluid" alt=""/>
                    </p>
                </div>
        </div>
        <div style={{marginTop:"50px"}}><SocialMedia/></div>
        <Footer/>
    </div>
    </>
  )
}

export default Anlytics