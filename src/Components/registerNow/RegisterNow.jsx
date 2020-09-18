import React from 'react';
import Register1 from '../../assets/register1.png';
import { Row, Col, Container } from 'react-bootstrap';
import './RegisterNow.css';

export default function RegisterNow() {
    return (
        <div className="Register">
            <Row>
                <Col xs={12} md={4}>
                    <img src={Register1} alt="img" />
                </Col>
                <Col xs={12} md={4}>
                    <div className="reg1">
                        <h3 className="want-h" >Want to know more?</h3>
                        <h4 className="want-h2" >Reach out to us on<br /><a href="#">hello@platoo.in</a></h4>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="reg2">
                        <button className="btn-reg">   Register Now</button> 
                    </div>
                </Col>

            </Row>
        </div>
    )
}