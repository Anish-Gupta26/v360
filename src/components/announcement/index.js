import React, { useEffect } from "react";
import Divider from "../divider";
import Aos from "aos";
import "aos/dist/aos.css";
import SocialMedia from "../Social-media";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Announcement = () => {
  // AOS library is used for animation
  // This file is contains the structure and content of announcement page
  useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <>
      <Divider />
      <div className="container">
        <h1 className="my-4 about">Announcement</h1>
        <button type="button" className="btn btn-md btn-outline-primary">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Back
          </Link>
        </button>
        <div className="flex-container row rev">
          <div
            className="flex-item-left col-lg-6 item1"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>Email Domain changed to D360.tech</h2>
            <h6 className="card-subtitle mb-2 text-muted">19/07/22</h6>
            <p className="my-4">
              Hi,We would like to express our gratitude and sincere thanks for
              all the support and cooperation you have given us. We would like
              to inform you that as of today we have changed our domain to
              "d360.tech".
              <br />
              <br />
              Moving forward, please direct all your emails to the new domain:
              <br />
              Example: kalpesh@v360.studio changed to kalpesh@d360.tech <br />
              sales@v360.studio changed to sales@d360.tech
              <br />
              <br />
              All the links for 360° Videos and Photos on D360.tech have already
              been used for the last 4 months. So you do not need to make any
              changes on your side. Only change is the Email ID as mentioned
              above.
              <br />
              Note: NO CHANGE for Company Name, Address, Phone Number or Shared
              Google Drive Links and 360° Video Links.
              <br />
              <br />
              We understand that there will be questions/query about this
              announcement and we are more than happy to meet or have a quick
              call to clear any question. Old email domain is no longer valid
              for receiving email and any email sent to old domains(v360.studio)
              is not reaching us, so please update your contact book as soon as
              possible. Your attention and update on the above change are highly
              appreciated.
              <br />
              <br />
              Sorry for any inconvenience caused. We look forward to continuing
              quick/reliable/secure 360° video/photography services and thank
              you for your continuous support!
            </p>
          </div>
          <div className="flex-item-right col-lg-6 img">
            {/* <a href='/' target='__blank'>  
                      <img src="" className="img-fluid pos" alt=""/>  
                </a>  */}
          </div>
        </div>

        {/* <div className="flex-container row">
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
          </div> */}
        {/* </div> */}
        <div style={{ marginTop: "50px" }}>
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Announcement;
