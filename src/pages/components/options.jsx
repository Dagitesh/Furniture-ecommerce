import React from 'react';
import  "./css/Options.css";
function Options() {
  return (
    <div className='header'>
      <div style={{ marginRight: 'auto' }}>
        <h1 style={{margin: '10px'}}>Products</h1>
      </div>
      <nav>
        <ul >
         <li className='popular-products' style={{fontWeight:'bold'}}>POPULAR PRODUCTS:</li>
          <li ><a href="#" style={{ color: 'brown', fontWeight: 'bold' }}>ALL</a></li>
          <li ><a href="#" style={{color:'brown', fontWeight: 'bold'}} >SOFA</a></li>
          <li  ><a href="#" style={{color:'brown', fontWeight: 'bold'}} >LAMP lIGHT</a></li>
          <li  ><a href="#"style={{color:'brown', fontWeight: 'bold'}} >CHAIRS</a></li>
        </ul>
      </nav>
     
  </div>
  );
}

export default Options;