import React from 'react';
import Footers from '../../assets/Footers.png';
import './Footer.css';
import Logo from '../header/logo.png';

export default function Footer() {
    return (
        <div>
            <img className="logo1" src={Logo} />

            <img className="footimg" src={Footers} />
        </div>
    )

}