import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <div className="navbar">
        <div className="n-left">
            <div className="logo">
                <span>Cell</span>
                <span>Fix</span>
            </div>
        </div>
        <div className="n-right">
            <ul>
                <li><a className='li_home' href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">123456789</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">Search</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar