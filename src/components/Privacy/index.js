import React from "react";
import "./privacy.css";
import { data } from "./privacy-data";
import Divider from "../divider/index";
import { Link } from "react-router-dom";
import SocialMedia from "../Social-media";
import Footer from "../Footer";

const Privacy = () => {
  return (
    <>
      <Divider />
      <div className="container privacy">
        <button type="button" className="btn btn-md btn-outline-primary my-3">
          <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
            Back
          </Link>
        </button>
        <div className="privacy-header">
          <h1 className="privacy-title">
            Our privacy and security{" "}
            <span className="blue-text">principles.</span>
          </h1>
          <p className="privacy-text">
            We build privacy that works for everyone. Protecting our user's
            privacy and security is a responsibility that comes with creating
            products and services that are free of cost and accessible for all.
            This is especially important as technology progresses and safety
            needs evolve. We look to these principles to guide our products, our
            processes and our people in keeping our user's data private, safe
            and secure.
          </p>
        </div>
        {data.map((item) => {
          return (
            <div key={item.id} className="privacy-flex-container row">
              <div className="privacy-flex-container-left col-lg-6">
                <h2>
                  <span className="blue-text">{item.blueTitle}</span>
                  {item.title}
                </h2>
              </div>
              <div className="privacy-flex-container-right col-lg-6">
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: "50px" }}>
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
