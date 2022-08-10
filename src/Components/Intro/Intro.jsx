import React from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import SelectOS from './SelectOS';

function Intro() {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="i-text">
          <span>Lifetime Warranty . Lowest Price</span>
          <span>India's Highest Rated Android</span>
          <span>Repairs at your doorstep</span>
          <span>PROFESSIONAL ANDROID TECHNICIANS</span>
          <span>Most trusted Android repair service in Jabalpur</span>
        </div>
      </div>
      <div className="i-right">
        <SelectOS />

      </div>
    </div>
  )
}

export default Intro