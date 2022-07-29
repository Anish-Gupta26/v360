import React from 'react';
import './testimonial.css';
// Testimonial section s
const Testimonial = () => {
    const userImg = require('../../assets/images/user.png')
  return (
        <div className="testimonial py-4 my-4">
            <h1 className='my-4'>Testimonial</h1>
            <div className="active">
            <div className="container">
                <div className="row" >
                <div className="col-md-4 review" data-aos="flip-right"  data-aos-duration="2000" >
                    <img className="rounded-circle shadow-1-strong mb-4 pic"
                    src={userImg} alt="avatar"
                    style={{width: "100px", display:"flex", margin:"auto"}} />
                    <h5 className="mb-3 name">Divyang Riziya</h5>
                    <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Very nice service. Quick and reliable. I had a few urgent requests and they were able to accommodate even though I was a new customer. Amazing response. Well managed.
                    </p>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    </ul>
                </div>

                <div className="col-md-4 review" data-aos="flip-up" data-aos-duration="2000">
                    <img className="rounded-circle shadow-1-strong mb-4 pic"
                    src={userImg} alt="avatar"
                    style={{width: "100px", display:"flex", margin:"auto"}} />
                    <h5 className="mb-3 name">Melvin F</h5>
                    <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Known Kalpesh for a while now. Gentleman! I will highly recommend as his works are top class with quicker and prioritized services.
                    </p>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    </ul>
                </div>

                <div className="col-md-4 review" data-aos="flip-left" data-aos-duration="2000">
                    <img className="rounded-circle shadow-1-strong mb-4 pic"
                    src={userImg} alt="avatar"
                    style={{width: "100px", display:"flex", margin:"auto"}} />
                    <h5 className="mb-3 name">avr g</h5>
                    {/* <p>Photographer</p> */}
                    <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Studio 360 NYC is the place to go for your 360 degree gem and jewelry photography.
                    </p>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    </ul>
                </div>
                </div>
             </div>
             <div className="text-center my-3">
                <button type="button" className="btn btn-outline-primary">
                <a href='https://search.google.com/local/reviews?placeid=ChIJlQW7Cs1ZwokRTJ6jlx_XS0s' target='__blank' style={{color : '#4285F4', textDecoration: "none"}}>
                    Read More
                </a>
                </button>
            </div>
            </div>
        </div>
  )
}

export default Testimonial