import React from 'react';

import './css/catagory.css';
import image1 from '/Users/HP/furniture_trial/src/assets/Blue_chair.png';
import image2 from '/Users/HP/furniture_trial/src/assets/green_chair.png';
import image3 from '/Users/HP/furniture_trial/src/assets/yellow_chair.png';
import image4 from '/Users/HP/furniture_trial/src/assets/rose_chair.png';

const Container = ({ title, image }) => {
  return (
    <div className="catagory-container">
      <div className="image-container">
        <img src={image} alt="Container Image" className="image" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

const Catagory = () => {
  return (
    <div><h1 style={{textAlign:'center'}}>Catagories</h1>
    <div className="catagory-container-grid">
     <a href='/home' style={{textDecoration:'None' , color:'black'}}> <Container title="Home" image={image1} /></a>
     <a href='#' style={{textDecoration:'None' , color:'black'}}><Container title="Office" image={image2} /></a> 
     <a href='#'  style={{textDecoration:'None'  , color:'black'}}> <Container title="Outdoors" image={image3} /></a>
     <a href='#'  style={{textDecoration:'None' , color:'black'}}><Container title="Storage" image={image4} /></a> 

 
    </div> </div>
  );
};

export default Catagory;