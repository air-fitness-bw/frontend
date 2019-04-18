import React from "react";
import "./checkout-card.css";
const CheckoutCard = ({ product, removeFromCart }) => {
  return (
    <div className="checkout-card-container">
      <div className="checkout-title">
        <p>{product.name}</p>
        <p>${product.price}</p>
        <p>10 Class Pass</p>
      </div>
      <p>{product.description}</p>
      <div className="checkout-button-container">
        <button
          className="checkout-button"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CheckoutCard;
