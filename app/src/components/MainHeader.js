import React from "react";
import "./main-header.css";
const MainHeader = props => {
  return (
    <div className="oval-bg">
      <h2>{props.welcome}</h2>
    </div>
  );
};
export default MainHeader;
