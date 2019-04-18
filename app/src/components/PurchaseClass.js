import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutCard from "./CheckoutCard";
import Footer from "./Footer";
import "./checkout-card.css";

class PurchaseClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getId = id => {
    return id;
  };
  render() {
    return (
      <div>
        <CheckoutHeader />
        <h2 className="checkout-banner">Checkout</h2>
        {this.props.cart.map(product => {
          return (
            <CheckoutCard
              removeFromCart={this.props.removeFromCart}
              key={product.id}
              product={product}
              getId={this.getId}
            />
          );
        })}
        <hr />
        <h2 className="checkout-total">Total: ${this.props.cartTotal}</h2>
        <div className="purchase-container">
          <button onClick={() => this.props.addToSchedule(this.getId)}>
            Purchase Items
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default PurchaseClass;
