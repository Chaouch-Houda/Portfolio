import React from "react";
import "./Footer.css";
import Wave from "../../img/wave1.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import gmail from "../../img/gmail2.png"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>houdachaouch05@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Chaouch-Houda"  target="_blank" rel="noreferrer"><Github color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/houda-chaouch/"  target="_blank" rel="noreferrer"><Linkedin color="white" size={"3rem"} /></a>
          <a href="mailto:houdachaouch05@gmail.com"><img src={gmail} alt="email" height="50px"/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
