import React from 'react';
import  "./css/AppBar.css";
import logo from "/Users/HP/furniture_trial/src/assets/trial_logo.jpg";
function AppBar() {
  return (
    <header style={{ backgroundColor: '#4779b7', color: 'white', display: 'flex', alignItems: 'center', padding: '10px' }}>
      <div style={{ marginRight: 'auto' }}>
        <img src={{logo}} alt="Logo" style={{ maxHeight: '40px' }} />
      </div>
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}><a href="#">Home</a></li>
          <li style={{ marginRight: '20px' }}><a href="#">About Us</a></li>
          <li style={{ marginRight: '20px' }}><a href="#">Features</a></li>
          <li style={{ marginRight: '20px' }}><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="login-btn" >
        <a href="#">Log in</a>
      </div>
    </header>
  );
}

export default AppBar;