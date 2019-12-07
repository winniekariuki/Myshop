import React from "react";
import "./customercare.css";

const divStyle = {
  height: "13px",
  width: "13px"
};

const CardCustomer = () => {
  return (
    <div className="col-md-6 center-flex no-padding no-padding center-flex content-holder">
      <div className="customer-care-Card">
        <div className="item-holder">
          <div className="customer-care">Customer Care</div>
          <div className="item-details">
            <h5 className="contacts"> +254 718 222 111</h5>
            <h5 className="email">support@sky.garden</h5>
            <h5 className="date-1">Mon - Fri: 8 am - 8 pm</h5>
            <h5 className="date-2">Sat - Sun: 9 am - 5 pm</h5>
          </div>
          <button className="start-chat">
            Start Live Chart
            {"    "} <i className="arrow right" style={divStyle}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCustomer;
