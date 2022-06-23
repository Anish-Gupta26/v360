import React from 'react'
import './features.css'
import { data } from './feature-data'
const Feature = () => {
  return (
    <div className='row features my-5' id='services'>
    <h1 className='my-4'>Our Services</h1>
    {data.map((item)=>{
        return(
            <div key={item.title} className="card col-lg-3 mx-3 card-style my-3 feature" data-aos="zoom-out"  data-aos-duration="2000">
            <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title text-center">{item.title}</h3>
                    <h6 className="card-text text-center">{item.description}</h6>
                    <div className='service-button-head'>
                    <button className='service-button'>TRY IT</button>
                    </div>
                </div>
            </div>
        )
    })}
    </div>    
  )
}

export default Feature