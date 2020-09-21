import React from 'react';
import Register1 from '../../assets/register1.png';
import { Row, Col, Container } from 'react-bootstrap';
import './RegisterNow.css';
import Logo from '../header/logo.png';
import { Nav, Navbar } from 'react-bootstrap';


export default function RegisterNow() {
    return (
        <div className="Register" id="register">
            <Row className="row">
                <Col xs={12} md={4}>
                    <img src={Register1} alt="img" />
                </Col>
                <Col xs={12} md={4}>
                    <div className="reg1">
                        <h3 className="want-h" >Want to know more?</h3>
                        <h4 className="want-h2" >Reach out to us on<br /><a>hello@platoo.in</a></h4>
                        <div className="hide-logo">      <img className="logo" src={Logo} /> </div>

                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="reg2">
                        <Nav.Link href="https://platoo.in/register-corporate.php" target="_blank"><button className="btn-reg" target="" >   Register Now</button></Nav.Link>
                    </div>
                </Col>

            </Row>
        </div>
    )
}