import React from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

function Intro()
 {
  const navigate = useNavigate();
  let selectedDevice = "";

  const [style1,setStyle1] = useState("btn-stable");
  const buttonClicked1 = ()=>{
      setStyle1("btn-active")
      setStyle2("btn-stable")
      selectedDevice="android";
      navigate("/android-repair");
    }
    const [style2,setStyle2] = useState("btn-stable");
    const buttonClicked2 = ()=>{
      setStyle2("btn-active")
      setStyle1("btn-stable")
      selectedDevice="windows";
      navigate("/windows-repair");
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
        <div className="i-right">
            <div className="right-text">
              <span>Select your device to get started now!</span>
            </div>
            <div className="devices-btn">
                <button  className={style1} onClick={buttonClicked1}>Android</button>
                <button  className={style2} onClick={buttonClicked2}>Windows</button>
            </div>
            {/* <button className="confirm" onClick={androidRepair}>Confirm & Proceed</button> */}
        </div>
    </div>
  )
}

export default Intro