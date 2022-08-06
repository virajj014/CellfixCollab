import React from 'react';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'


function Footer() {
  return (
    <div className="footer">
        <div className="f-top">
            <div className="f-left">
                <div className="f-logo">
                    <span>Cell</span>
                    <span>Fix</span>
                </div>
                <div className="f-mail">
                    cellfix@gmail.com
                </div>
                <div className="f-phone">
                    123456789
                </div>
            </div>
            <div className="f-center">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Privacy</a></li>
                </ul>
            </div>
            <div className="f-right">
                <Insta color='#fb3958' size='3rem' />
                <Facebook color='#4267b2' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>
        </div>
        <div className="f-bottom">
            <span>@ 2022 CellFix, All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer