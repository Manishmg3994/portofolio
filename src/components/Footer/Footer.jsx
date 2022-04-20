import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto://manishgautammg7@gmail.com">
        <span>manishgautammg7@gmail.com</span>
        </a>
        <div className="f-icons">
        <a href="https://www.instagram.com/manish_todi/" target="_blank" >
          <Insta color="white" size={"3rem"} alt= ""/>
          </a>
          <a href="https://www.facebook.com/manish.gautam.3994" target="_blank" >
          <Facebook color="white" size={"3rem"} alt='' />
          </a>
          <a href="https://github.com/Manishmg3994" target="_blank" >
          <Gitub color="white" size={"3rem"} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
