import React from "react";
import "./checkout-card.css";
class CheckoutCard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getId(this.props.product.name);
  }
  render() {
    return (
      <div className="checkout-card-container">
        <div className="checkout-title">
          <p>{this.props.product.name}</p>
          <p>${this.props.product.price}</p>
          <p>10 Class Pass</p>
        </div>
        <p>{this.props.product.description}</p>
        <div className="checkout-button-container">
          {/* <button
            className="checkout-button"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button> */}
        </div>
      </div>
    );
  }
}
export default CheckoutCard;
// const CheckoutCard = ({ product, getId }) => {
//   return (
//     <div onLoad={() => getId(product.id)} className="checkout-card-container">
//       <div className="checkout-title">
//         <p>{product.name}</p>
//         <p>${product.price}</p>
//         <p>10 Class Pass</p>
//       </div>
//       <p>{product.description}</p>
//       <div className="checkout-button-container">
//         {/* <button
//           className="checkout-button"
//           onClick={() => removeFromCart(product.id)}
//         >
//           Remove
//         </button> */}
//       </div>
//     </div>
//   );
// };
// export default CheckoutCard;
