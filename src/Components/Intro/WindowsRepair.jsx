import React from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import {useNavigate,useLocation} from "react-router-dom";
import ReactDropdown from 'react-dropdown';
import { render } from 'react-dom';

function WindowsRepair() {
  const navigate = useNavigate();
  function back(){
    navigate(-1);
  }

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
        <div className="android-right">
            <div className="android-text">
              <span>You Selected</span>
              <span>Windows</span>
              <button onClick={()=>navigate(-1)}>Change</button>

            </div>
            <div className="devices-btn">
                
            </div>
        </div>
    </div>
  )
}

export default WindowsRepair