import React from "react";
import LogoImage from "../../assests/logo.png";
import './logo.css';
const Logo = () => {
  return (
    <img src={LogoImage} alt="QTify Logo" className="qtify-logo" />
  );
};
export default Logo;
