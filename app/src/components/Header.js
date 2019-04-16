import React from "react";
import profileIcon from "../images/profileIcon.png";
import "./header.css";

const Header = props => {
  return (
    <div>
      <div className="header-container">
        <div>
          <p className="air-logo">AIR</p>
          <p className="fitness-logo">fitness</p>
          <p>
            Let's <span>workout</span> on your schedule!
          </p>
        </div>

        <div>
          <img className="login-icon" src={profileIcon} alt="profile-icon" />
        </div>
      </div>
      <div>
        <h2 className="login-banner">{props.banner}</h2>
      </div>
    </div>
  );
};
export default Header;
