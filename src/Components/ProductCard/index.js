import React from "react";
import "./style.css";

const ProductPanel = props => {
  const previous_price = Math.ceil(
    (props.product.stock_record_price_retail * 100) /
      (100 - props.product.offer_benefit_value)
  );
  return (
    <div className="productCard">
      <img
        src={props.product.thumbnail}
        alt="brown bag"
        className="product-image"
      />
      <div className="top-left"></div>
      <p className="benefit-value"> - {props.product.offer_benefit_value} %</p>
      <div className="card-body">
        <p className="product-title">{props.product.title}</p>
        <p className="product-main-text">{props.product.partner_name}</p>

        <span className="price">
          {props.product.stock_record_price_retail}{" "}
          {props.product.stock_record_price_currency}
        </span>
        <span className="previous-price">
          {previous_price} {props.product.stock_record_price_currency}
        </span>
      </div>
    </div>
  );
};

export default ProductPanel;
