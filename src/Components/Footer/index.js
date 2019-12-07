import "./style.css";
import React from "react";
import "font-awesome/css/font-awesome.min.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="logo-app">
        <h3>
          GET{" "}
          <img
            alt="Logo"
            className="logo"
            src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574958029/SkyTest/skygarden_logo_pos_copy.png"
          />{" "}
          App. It's free!
        </h3>
      </div>

      <div className="appstore">
        <img
          alt="Logo"
          className="play"
          src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574958032/SkyTest/Playstore.png"
        />
      </div>
      <div className="row footer-row">
        <div className="col-lg-3">
          <div className="inner-details">
            <h5 className="custom-column">COMPANY</h5>
              <p>About Us</p>
              <p>Sell with Sky.Garden</p>
              <p>Sky.Garden Blog</p>
              <p>Returns and Exchange</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="inner-details no-padding">
            <h5 className="custom-column">CONTACT US</h5>
              <p>FAQ Center</p>
              <p>hello@sky.garden</p>
              <p>5th Floor, Senteu Plaza Nairobi Kenya</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="inner-details">
            <h5 className="custom-column">SHOPING WITH US IS EASY</h5>
              <p>
                <img
                  className="data"
                  src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574964113/SkyTest/car_copy.png"
                  alt="deliver"
                />{" "}
                Same day delivery-text
              </p>
              <p>
                <img
                  className="lock"
                  src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574958048/SkyTest/lock_2_copy.png"
                  alt="deliver"
                />{" "}
                Secure payment online or on delivery-text
              </p>
              <p>
                <i className="fa fa-arrow-circle-left" aria-hidden="true" />
                {"  "}
                Free returns
              </p>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="inner-details">
            <h5 className="custom-column">FOLLOW OUR NEWS</h5>
              <p>
                <i className="fa fa-facebook-official" aria-hidden="true" />{" "}
                FaceBook
              </p>
              <p>
                <i className="fa fa-instagram" aria-hidden="true" /> Instagram
              </p>
              <p>
                <i className="fa fa-linkedin-square" aria-hidden="true" />{" "}
                LinkdIn
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
