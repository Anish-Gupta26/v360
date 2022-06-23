import React,{useEffect} from 'react'
import './body.css'
import '../Body/'
import Aos from 'aos';
import "aos/dist/aos.css";
import Feature from '../Features';
import Testimonial from '../testimonials';
import SocialMedia from '../Social-media';
import Footer from '../Footer';
import Header from '../Navbar';
import Contact from '../Contact';

const Body = () => {
  useEffect(() => {
    Aos.init({
      duration : 200
    });
  }, [])

  const image1 = require('../../assets/images/LOGO.png')
  return (
      <>
      <Header/>
    <div className='container App'>
        <img data-aos="fade-down" data-aos-duration="2000" src={image1} className="img-fluid pos landing" alt=""/>
        <h1 className='service' data-aos="fade-up" data-aos-duration="2000">STUDIO | STOCK ANALYSIS | LOGISTICS</h1>
        <div className='location' data-aos="fade-up" data-aos-duration="2000"><h3>NewYork <i className="fa-solid fa-location-dot"></i></h3></div>
        <br/><br/>
        <h1 data-aos="fade-up" data-aos-duration="2000">Our mission is to organise the Diamond Industry information and make it easily accessible and useful.</h1>
        
        <Feature/>
        <Testimonial/>
        <Contact/>
        <SocialMedia/>
        <Footer/>
    </div>
    </>
  )
}

export default Body