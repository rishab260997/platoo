import React from 'react';
import {Container } from 'react-bootstrap';
import './Develop.css';

export default function Develop() {
    return (
        <div>
            <h1>Develop your Platform on Platoo and Host</h1>
            
            <div className="d-flex flex-row justify-content-around container" id="one">
                <h6>Webinars</h6>
                <h6>Trade Shows</h6>
                <h6>Exhibitions</h6>
                <h6>Seminars & Conference</h6>
            </div>
            <div className="d-flex flex-row justify-content-around container" id="one">
                <h6>Roundtables</h6>
                <h6>Customer Meets</h6>
                <h6>Product-Launches</h6>
                <h6>Training Sessions</h6>
            </div>
            <div className="d-flex flex-row justify-content-around container" id="one">
                <h6>Sales Meet</h6>
                <h6>Team Building Activities</h6>
                <h6>CXO Keynotes</h6>
                <h6>Executive Retreats</h6>
            </div>
        </div>
    )
}