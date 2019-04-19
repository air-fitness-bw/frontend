import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutCard from "./CheckoutCard";
import Footer from "./Footer";
import "./checkout-card.css";

class PurchaseClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }
  // componentDidMount() {
  //   this.setState({
  //     id: this.getId()
  //   });
  // }
  sendId = () => {
    setTimeout(this.getId, 3000);
  };
  getId = id => {
    this.setState({
      id: id
    });
  };
  render() {
    console.log(this.state.id);
    return (
      <div>
        <CheckoutHeader />
        <h2 className="checkout-banner">Checkout</h2>
        {this.props.cart.map(product => {
          return (
            <CheckoutCard
              key={product.id}
              product={product}
              getId={this.getId}
            />
          );
        })}
        <hr />
        <h2 className="checkout-total">Total: ${this.props.cartTotal}</h2>
        <div className="purchase-container">
          <button onClick={() => this.props.addToSchedule(this.state.id)}>
            Purchase Items
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default PurchaseClass;
