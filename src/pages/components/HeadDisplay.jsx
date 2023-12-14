import React from "react";
import "./css/Head.css";
import img1 from "/Users/HP/furniture_trial/src/assets/Blue_chair.png";

function HeadDisplay() {
  return (
    <div className="container">
      <div className="left-side">
        <h1> Elevate Your Living Space with Our Exclusive Furniture Selection!</h1>
        <p>Whether you're furnishing your living room, bedroom, dining area, or office, we have everything you need to create a space that suits your taste and meets your functional needs.</p>
        <div className="buttons">
          <button className="btn1">BUY NOW</button>
          <button className="btn2">READ MORE</button>
        </div>
      </div>
      <div className="right-side">
        <img src={img1} alt="Image description" />
      </div>
    </div>
  );
}

export default HeadDisplay;