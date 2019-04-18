import React from "react";
import "./main-header.css";
import pushup from "../images/pushup.png";
import profileIcon from "../images/profileIcon.png";
import InstructorNav from "./InstructorNav";
const InstructorHeader = props => {
  return (
    <div className="oval-bg">
      <div className="logo">
        <div>
          <p className="air-logo">AIR</p>
          <p className="fitness-logo">fitness</p>
        </div>
        <div>
          <InstructorNav />
        </div>
        <div className="profile-icon-header">
          <img src={profileIcon} alt="profile icon" />
        </div>
      </div>
      <div className="pushup">
        <img src={pushup} alt="man doing pushups" />
      </div>
      <h2 className="greeting">{props.welcome}</h2>
    </div>
  );
};
export default InstructorHeader;
