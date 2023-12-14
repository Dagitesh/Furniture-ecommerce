import React from 'react';
import './css/oval.css';
import image1 from '/Users/HP/furniture_trial/src/assets/Blue_chair.png';
import image2 from '/Users/HP/furniture_trial/src/assets/green_chair.png';
import image3 from '/Users/HP/furniture_trial/src/assets/yellow_chair.png';
import image4 from '/Users/HP/furniture_trial/src/assets/rose_chair.png';

const Container = ({ title, image }) => {
  return (
    <div className="oval-container">
      <div className="image-container">
        <img src={image} alt="Container Image" className="image" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

const Oval = () => {
  return (
    <div><h1 style={{textAlign:'center'}}>Explore More</h1>
    <div className="oval-container-grid">
      <Container title="Arm Chairs" image={image1} />
      <Container title="Armless Chairs" image={image2} />
      <Container title="Swivel Chairs" image={image3} />
      <Container title="Beige Chairs" image={image4} />
      <Container title="Green Chairs" image={image2} />
 
    </div> </div>
  );
};

export default Oval;