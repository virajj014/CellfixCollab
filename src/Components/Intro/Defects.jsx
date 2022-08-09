import React from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import {useLocation, useNavigate} from "react-router-dom";
// import ReactDropdown from 'react-dropdown';

function Defects(props) {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {device} = state;
  console.log(device);

  console.log(props.name)
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
              <span></span>
              <button onClick={()=>navigate(-1)}>Change</button>
            </div>
            <div className="android-btn">
                
            </div>
        </div>
    </div>
  )
}

export default Defects