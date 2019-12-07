import React from "react";
import "./retailcard.css";

const divStyle = {
  height: "13px",
  width: "13px"
};
const RetailCard = () => {
  return (
    <div className="col-md-6 no-padding  center-flex no-padding center-flex content-holder">
      <div id="retailer-card">
        <div>
          <div className="ready-sell">Ready to sell</div>
        </div>

        <p className="main-text-details">
          {" "}
          Open your free shop and start selling in 5 min!
        </p>

        <button className="get-started-button">
          Open Your Shop
          <i className="arrow right" style={divStyle}></i>
        </button>
      </div>
    </div>
  );
};

export default RetailCard;
