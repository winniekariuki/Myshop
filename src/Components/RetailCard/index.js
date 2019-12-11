import React from "react";
import "./retailcard.css";

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

        <button className="open-shop-button">
          Open Your Shop
          <i className="pointer fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default RetailCard;
