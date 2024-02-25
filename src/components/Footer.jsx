import React from "react";
import dd from "../assets/dd.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="ftr">
      <div className="lft">
        <div>
          <div className="head">CATEGORIES</div>
          <div className="cntnt"> Web Builder</div>
          <div className="cntnt">Hosting</div>
          <div className="cntnt">Data Center</div>
          <div className="cntnt">Robotic Automation</div>
        </div>
      </div>
      <div className="mdl">
        <div>
          <div className="head">CONTACT</div>
          <div className="cntnt">Contact</div>
          <div className="cntnt"> Privacy Policy</div>
          <div className="cntnt">Terms of Service</div>
          <div className="cntnt">Categories</div>
          <div className="cntnt">About</div>
        </div>
      </div>
      <div className="rht">
        United States
        <img src={dd} alt="img" />
      </div>
    </div>
  );
};

export default Footer;
