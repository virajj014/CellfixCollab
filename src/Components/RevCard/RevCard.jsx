import React from 'react'
import './RevCard.css'

const RevCard = ({profile, heading, detail}) => {
  return (
    <div className="revcard">
        <div className="rc-details">
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
        <div className="rc-img">
            <img src={profile} alt="" />
        </div>
    </div>
  )
}

export default RevCard