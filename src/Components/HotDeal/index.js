import React from "react";
import "./hotdeals.css";
import countDown from "../../helpers";

const HotDeals = () => {
  window.onload = countDown();
  return (
    <div className="main">
      <div className="main-main-text">
        <p className="hot-main-text">HOT Holiday deals</p>
        <p className="main-text">
          Sky. Garden loves all the fathers and knows that you need some help in
          choosing something special. Here is few of the sweet things we found
          and you might like.
        </p>
        <span id="count" className="clock-timer"></span>
      </div>
      <div className="image-top">
        <img
          className="woman"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575574508/shoppinglady_rnuexn.png"
          alt="sky garden"
        />
        <img
          className="delivery-text-icon"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575574607/black_bubble_bg81wg.png"
          alt="sky garden"
        />

        <img
          className="discount-value-icon"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575574608/discountcircle_cpbiqx.png"
          alt="sky garden"
        />
        <img
          className="white-line"
          src="https://res.cloudinary.com/dievrxv8v/image/upload/v1575574607/discount_line_atnfu5.png"
          alt="sky garden"
        />
        <h2 className="delivery-text">DELIVERY SAME DAY!</h2>
        <h2 className="discount-value">-10%</h2>
      </div>
    </div>
  );
};

export default HotDeals;
