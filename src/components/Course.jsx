import React from "react";
import "./Course.scss";
import cmp from "../assets/cmp.png";
const Course = () => {
  return (
    <div className="courses">
      <img src={cmp} alt="img" />
      <div className="discount">
        <div className="ds">20%</div>
        <div className="ds">Limited time</div>
      </div>
      <div style={{ fontWeight: "700", fontSize: "16px", fontFamily: "inter" }}>
        Webbuilder 1
      </div>
      <div className="ttl">Computer Modern clasic with wix support</div>
      <div className="price">
        <div className="discountprice">$39.96</div>
        <div className="actual">$49.96</div>
        <div className="offer">(20% off)</div>
      </div>
      <button className="btn btn1">View Deals</button>
    </div>
  );
};

export default Course;
