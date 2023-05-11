import React from "react";
import hamburger from "../../assets/hamburger.png";
import logo from "../../assets/navbarlogo.png";
import CardComponent from "../CardComponent/CardComponent";

const DetailNavbar = () => {
  return (
    <div className="navbardesc">
      <img src={hamburger} alt="" className="hamburger" />
      <img src={logo} alt="" className="logo" />
      <p></p>
    </div>
  );
};

export default DetailNavbar;
