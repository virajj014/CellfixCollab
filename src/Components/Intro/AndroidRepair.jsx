import React from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import {useNavigate,useLocation} from "react-router-dom";
import ReactDropdown from 'react-dropdown';
import Defects from './Defects';

function AndroidRepair() {
  const navigate = useNavigate();
  function btnClick(){
      console.log("clicked")
      navigate('/android-repair/defects',{state:{device:"Redmi"}});
  }

  let options = ["Redmi","Samsung","Realme","Vivo"];
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
              <span>Android</span>
              <button onClick={()=>navigate(-1)}>Change</button>
            </div>
            <div className="container">
            </div>
        </div>
    </div>
  )
}

export default AndroidRepair