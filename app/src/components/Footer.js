import React from "react";
import Logo from "./Logo";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <Logo />
      </div>
      <div>
        <p>Phone: (123) 456 - 7890</p>
        <p>Email: contact@airfitness.com</p>
        <p>Copyright AIR fitness 2019</p>
      </div>
    </div>
  );
};
export default Footer;
