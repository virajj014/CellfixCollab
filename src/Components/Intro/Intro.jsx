import React from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';

function Intro() {

  const [style1,setStyle1] = useState("btn-stable");
  const buttonClicked1 = ()=>{
    if(setStyle1("btn-active")==true){
      setStyle1("btn-stable");
    }
    else{
      setStyle1("btn-active");
    }
  }
  const [style2,setStyle2] = useState("btn-stable");
  const buttonClicked2 = ()=>{
    setStyle2("btn-active")
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
            <button className="confirm">Confirm & Proceed</button>
        </div>
    </div>
  )
}

export default Intro