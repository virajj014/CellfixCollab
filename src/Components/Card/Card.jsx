import React from 'react'
import './Card.css'
const Card = ({profile, heading, detail}) => {
  return (
    <div className="card">
        <div className="c-img">
            <img src={profile} alt="" />
        </div>
        <div className="c-details">
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    </div>
  )
}

export default Card