import React from "react";
import "./main-header.css";
import profileIcon from "../images/profileIcon.png";
import NavBar from "./NavBar";
const CheckoutHeader = props => {
  return (
    <div className="checkout-header">
      <div className="logo">
        <div>
          <p className="air-logo">AIR</p>
          <p className="fitness-logo">fitness</p>
        </div>
        <div>
          <NavBar />
        </div>
        <div className="profile-icon-header">
          <img src={profileIcon} alt="profile icon" />
        </div>
      </div>
      <h2 className="greeting">{props.welcome}</h2>
    </div>
  );
};
export default CheckoutHeader;
