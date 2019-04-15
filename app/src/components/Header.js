import React from "react";
import profileIcon from "../images/profileIcon.png";
const Header = props => {
  return (
    <div>
      <div>
        <p className="logo-air">AIR</p>
        <p className="logo-fitness">fitness</p>
        <p>
          Let's <span>workout</span> on your schedule!
        </p>
      </div>
      <div>
        <img src={profileIcon} alt="profile-icon" />
      </div>
      <div>
        <h2>{props.banner}</h2>
      </div>
    </div>
  );
};
export default Header;
