import "./footer.css";
import React from "react";
import car from '../../Images/car copy.png';
import lock from '../../Images/lock (2) copy.png';
import "font-awesome/css/font-awesome.min.css";

const style = {
  font:"100px "}
const footer = () => {
  return (
    <div className="footer">
      <div className="logo-app">
        <h3>
          GET{" "}
          <img
            alt="Logo"
            className="logo"
            src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575555823/skygarden/skygarden_logo_pos_copy_1_n2bkb9.png"
          />{" "}
          App. It's free!
        </h3>
      </div>

      <div className="appstore">
        <img
          alt="Logo"
          className="playstore"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575555822/skygarden/google_tpflzh.png"
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
                  className="car"
                  src={car}
                  alt="deliver"
                />{" "}
                Same day delivery-text
              </p>
              <p>
                <img
                  className="lock"
                  src={lock}
                  alt="deliver"
                />{" "}
                Secure payment online or on delivery-text
              </p>
              <p>
              <span style={style}>&#8617;</span>
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
                LinkedIn
              </p>
          </div>
   
        </div>
    </div>
        <div className="sky-garden-2019">&copy;sky-garden-2019</div>
        <div className="flex-container">
        <div><img
          alt="mpesa"
          className="mpesa"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575555823/skygarden/mpesa_yjgg93.png"
        />
        </div>
        <div>
             <img
          alt="equitel"
          className="equitel"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575555822/skygarden/equitel_mddyn6.png"
          />
        </div>
        <div>
           <img
          alt="visa"
          className="visa"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575555823/skygarden/visa_r9tpuu.png"
          />
        </div>
        <div>
            <img
          alt="mastercard"
          className="mastercard"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575555823/skygarden/mastercard_-_Copy_u0dnxc.png"
        />
        
      </div>
      </div>
           <div className="privacy-policy-i-ter "><p>Privacy Policy| Terms and Conditions</p></div>
        </div>
    
  );
};

export default footer;
