import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div>
      <div className="text" style={{backgroundColor:"#a6672b"}}>
      <p className="text-msg">
      In line with government guidelines, our stores in Hong Kong will remain open under adjusted opening hours.   <a href="#" style={{color:"white"}}>For assistance, please click here.</a>
      </p>
    </div>
    <div className="text">
      <p className="text-msg">
     Due to a high volume of orders, deliveries may take longer than usual to arrive.
      </p>
      <span>+</span>
    </div>
    </div>
  );
};

export default Top;
