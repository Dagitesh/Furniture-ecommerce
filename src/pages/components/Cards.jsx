import React from 'react';
import './css/card.css';
import img3 from "/Users/HP/furniture_trial/src/assets/rose_chair.png";
import img4 from "/Users/HP/furniture_trial/src/assets/small_chair.png";
import img5 from "/Users/HP/furniture_trial/src/assets/yellow_chair.png";
import img6 from "/Users/HP/furniture_trial/src/assets/green_chair.png";
const cardColors = ["orange", "lightblue", "lightgreen"];
const products = [
  {
    id: 1,
    title:'Purple chair',
    imageSrc: img3,
    description: 'Purple chair for living room',
    price: '$10.99',
  },
  {
    id: 2,
    title:'Blue',
    imageSrc: img4,
    description: 'Blue chair for living room',
    price: '$19.99',
  },
  {
    id: 3,
    title:'Yellow',
    imageSrc: img5,
    description: 'A living room chair suitable for every style.',
    price: '$9.99',
  },
  {
    id: 4,
    title:'Green',
    imageSrc: img6,
    description: 'A living room chair suitable for every style.',
    price: '$1.99',
  },
  {
    id: 5,
    title:'Rose',
    imageSrc: img3,
    description: 'A living room chair suitable for every style.',
    price: '$1.99',
  },
  {
    id: 5,
    title:'Green',
    imageSrc: img6,
    description: 'A living room chair suitable for every style.',
    price: '$1.99',
  },
  // Add more products as needed
];

function Cards() {
  return (
    <div className="card-container">
    {products.map((product, index) => (
      <div
        key={product.id}
        className={`card ${cardColors[index % cardColors.length]}`}
      >
        <img src={product.imageSrc} alt={`Product ${product.id}`} />
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
        <div className="price">{product.price}</div>
      </div>
    ))}
  </div>
  );
}

export default Cards;