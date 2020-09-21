import React from 'react';
// import { Container } from 'react-bootstrap';
import './Develop.css';

export default function Develop() {
    return (
        <div>
            <h1 className="develop-c">Develop your Platform on Platoo and Host</h1>

            <div className="row one webinar ">
                <div className="col-xs-6 col-md-3">
                    Webinar
                 </div>
                <div className="col-xs-6 col-md-3">
                    Trade Shows
                </div>
                <div className="col-xs-6 col-md-3">
                    Exhibitions
                 </div>
                <div className="col-xs-6 col-md-3">
                    Seminars&Conference
                </div>
                
            </div>
            <div className="row one roundtables">  
                <div className=" col-xs-6 col-md-3">
                    Roundtables
                       </div>
                <div className="col-xs-6 col-md-3">
                    Customer Meets
                </div>
                <div className="col-xs-6 col-md-3">
                    Product-Launches
                        </div>
                <div className="col-xs-6 col-md-3">
                    Training Sessions
                </div>
            </div>
            <div className="row one sales-meet">  
                <div className=" col-xs-6 col-md-3">
                    Sales Meet
                   </div>
                <div className="col-xs-6 col-md-3">
                    Team Building Activities
                </div>
                <div className="col-xs-6 col-md-3">
                    CXO Keynotes
                        </div>
                <div className="col-xs-6 col-md-3">
                    Executive Retreats
                </div>
            </div>
        </div>
    )
}