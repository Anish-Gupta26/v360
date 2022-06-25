import React, {useEffect} from 'react'
import Divider from '../divider'
import Aos from 'aos';
import "aos/dist/aos.css";
import SocialMedia from '../Social-media';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const About = () => {
useEffect(() => {
      Aos.init({
            duration : 200
      });
      }, [])
  return (
      <>
      <Divider/>
    <div className='container'>
      
        <h1 className='my-4 about'>About Us</h1>
        <button type="button" className="btn btn-md btn-outline-primary"><Link to='/' style={{color:"black", textDecoration:"none"}}>Back</Link></button>
        <div className="flex-container row rev">
          <div className="flex-item-left col-lg-6 item1" data-aos="fade-up" data-aos-duration="2000">
            <h2>How V360 Tech organizes Diamond Industry information</h2>
            <p className='my-4'>
            V360 Tech looks through hundreds of thousands of diamond metadata and other content stored in our cloud storage index to find helpful information — more information than all of the online diamond platforms. We use AI Platform to analyse the market inventory information provided by our user and openly available information from online platform.<br/>Our Logistic Service helps diamond businesses to handle their goods by providing safe and quick physical service in New York to show/ship goods to clients in the US.
            </p>
          </div>
          <div className="flex-item-right col-lg-6 img">
                {/* <a href='/' target='__blank'>  
                      <img src="" className="img-fluid pos" alt=""/>  
                </a>  */}
          </div>
      </div>

      <div className="flex-container row">
          <div className="flex-item-right col-lg-6 img">
                <a href='/' target='__blank'>  
                      <img src='' className="img-fluid pos" alt=""/>  
                </a> 
          </div>
          <div className="flex-item-left col-lg-6 item2" data-aos="fade-up" data-aos-duration="2000">
            <h2>Finding information by crawling</h2>
            <p className='my-4'>
            Most of our Data is built through the work of software known as crawlers. These automatically visit publicly accessible online platforms like Blue Nile, Brilliant Earth, etc and follow links on those pages, much like you would if you were browsing content on the web. They go from page to page and store information about what they find on these pages and other publicly-accessible content in our cloud index. The V360 Tech cloud contains hundreds of thousands of Diamond information and is well over 100 TB in size.
            </p>
          </div>
      </div>

      <div className="flex-container row rev">
          <div className="flex-item-left col-lg-6 item3" data-aos="fade-up" data-aos-duration="2000">
            <h2>Our approach to Diamond Industry</h2>
            <p className='my-4'>
            Businesses around the world turn to V360 Tech to find information, learn about diamonds they are interested in, and make important decisions. We know people rely on us so our commitment will never waver. As technology evolves, we will continue to help business find the information they're looking for.
            </p>
          </div>
          <div className="flex-item-right col-lg-6 img">
                <a href='/' target='__blank'>  
                      <img src='' className="img-fluid pos" alt=""/>  
                </a> 
          </div>
      </div>

      <div className="flex-container row">
          <div className="flex-item-right col-lg-6 img">
                <a href='/' target='__blank'>  
                      <img src='' className="img-fluid pos" alt=""/>  
                </a> 
          </div>
          <div className="flex-item-left col-lg-6 item4" data-aos="fade-up" data-aos-duration="2000">
            <h2>We believe Your Search for Diamond should</h2>
            <p className='my-4'>
            To help you find what you're looking for, these systems consider many factors, including the diamond metadata, video & images, history of diamond, the expertise of sources, and location. To measure whether people continue to find our results relevant and reliable, we have a rigorous process that involves extensive testing to ensure our automated systems produce great results as a human would expect.
            </p>
          </div>
      </div>
      <div className="flex-container row rev">
          <div className="flex-item-left col-lg-6 item5" data-aos="fade-up" data-aos-duration="2000">
            <h2>Maximise access to information</h2>
            <p className='my-4'>
            V360 Tech mission is to organise the Diamond Industry Information and make it easily accessible and useful. That's why we make it easy to discover a broad range of information from a wide variety of sources. Some information is simple, like the measurement of the diamond. For more complex topics, V360 Tech is a tool to explore many angles so you can form your own understanding of the business.
            </p>
          </div>
          <div className="flex-item-right col-lg-6 img">
                <a href='/' target='__blank'>  
                      <img src='' className="img-fluid pos" alt=""/>  
                </a> 
          </div>
      </div>

      <div className="flex-container row">
         <div className="flex-item-right col-lg-6 img" >
                <a href='/' target='__blank'>  
                      <img src='' className="img-fluid pos" alt=""/>  
                </a> 
          </div>
          <div className="flex-item-left col-lg-6 item6" data-aos="fade-up" data-aos-duration="2000">
            <h2 style={{textDecoration:"none"}}><Link to='/privacy'>Protect your privacy</Link></h2>
            <p className='my-4'>
            Guided by our privacy principles, we create tools and explanations to help you understand how we use data to make Search more helpful to you. For example, using your search history, V360 Tech can autocomplete your searches. 
            <br/>When you use our products you trust us with your data, and it’s our responsibility to keep your data private, safe, and secure. 
            <br/>To keep your data secure, we’ve built some of the most advanced security infrastructure in the world. And we'll never sell your personal information to anyone. We make money from technical/physical service, not by selling personal information.
            </p>
          </div>
      </div>

      <div className="flex-container row rev">
          <div className="flex-item-left col-lg-6 item7" data-aos="fade-up" data-aos-duration="2000">
            <h2>Sell Service, nothing more</h2>
            <p className='my-4'>
            Tech/Studio/Logistic service are how our platform remains accessible to everyone. But services are the only thing we sell.Whether a business, individual or organization buys our service is not a factor in our algorithms. We never provide special treatment to any business in how our algorithms rank their diamonds, and nobody can pay us to do so.
            </p>
          </div>
          <div className="flex-item-right col-lg-6 img">
                <a href='/' target='__blank'>  
                      <img src='' className="img-fluid pos" alt=""/>  
                </a> 
          </div>
      </div>

      <div className="flex-container row">
          <div className="flex-item-right col-lg-6 img">
                <a href='/' target='__blank'>  
                      <img src='' className="img-fluid pos" alt=""/>  
                </a> 
          </div>
          <div className="flex-item-left col-lg-6 item8" data-aos="fade-up" data-aos-duration="2000">
            <h2>Help business succeed online</h2>
            <p className='my-4'>
            To support a healthy ecosystem of fresh and useful diamond industry information, we help businesses of all sizes succeed and be found by others. We do this by sending new customers to small and large through our technology, or by connections such as listing business inventory. We don't charge to be in our listings, and we also provide free tools and resources to business owners to be successful.
            </p>
          </div>
      </div>
      <div style={{marginTop:"50px"}}><SocialMedia/></div>
      <Footer/>
    </div>
    </>
  )
}

export default About