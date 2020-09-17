import React from 'react';
import Register1 from '../../assets/register1.png';
import { Row, Col, Container } from 'react-bootstrap';
import './RegisterNow.css';

export default function RegisterNow() {
    return (
        <div>
            <Row>
                <Col>
                    <img src={Register1} alt="img" />
                </Col>
                <Col >
                    <h3 className="want-h" >Want to know more?</h3>
                    <h4 className="want-h2" >Reach out to us on<br /><a href="#">hello@platoo.in</a></h4>
                </Col>
                <Col>
                    <button className="btn-reg">
                        Register Now</button>
                </Col>
            </Row>
        </div>
    )
}