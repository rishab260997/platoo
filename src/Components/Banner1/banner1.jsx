import React from 'react';
import './banner1.css';
import graphic1 from '../../assets/graphic1.png'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Banner1() {
    return (
        <Container className="cntnr">
            <Row>
                <Col sm={6}>
                    <div className="banner-bg">
                        <span className="still-paying"> Still paying for a <br />
                            Virtual Events platform ?<br/> </span>
                        <span className="build-your"> Build your platform NOW! <br/></span>
                        
                        <button className="butt">only at <span className = "rupee"> &#8377;  4999 </span> </button>{' '}

                     <br/>
                     <br/><br/>
                     <br/><br/>
                     <br/><br/>
                        <button className="butt1" >RegisterNow</button>{' '}
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="graphic1">
                        <img src={graphic1} alt="graphic1"/>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
export default Banner1;