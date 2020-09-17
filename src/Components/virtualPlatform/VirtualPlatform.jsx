import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './VirtualPlatform.css'
import Banner4 from '../../assets/Banner4.png';
import Banner4_1 from '../../assets/Banner4_1.png';
import Banner4_2 from '../../assets/Banner4_2.png';


export default function VirtualPlatform() {
    return (
        <div>
            <div className="container">
                <p className="vp1">VIRTUAL <br /> PLATFORM MODULE</p>
            </div>
            <Container>
                <Row>
                    <Col sm={8}>
                        <h4 className = "dev-h"> Develop your virtual Platform</h4>
                        <Row>
                            <Col xs={2} md={1}>
                                <span><img src={Banner4_1} alt="img" /></span>
                            </Col>
                            <Col xs={6} md={2}>
                                <span>
                                    Duration:<br />
                                    <b className="five-h" >5 hours</b>
                                </span>
                            </Col>
                            <Col xs={2} md={1}>
                                <span><img src={Banner4_2} alt="img" /></span>
                            </Col>
                            <Col xs={6} md={4}>
                                <span>
                                    Starting from<br />
                                    <b className="five-h" >Friday, 25th Sept 2020</b>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="what-h" >What's included:</p>
                                <p className="what-p"> Access to online sessions</p>
                                <p className="what-p"> Sub-domain access for practice and hosting demos (for 3 months)</p>
                                <p className="what-p"> Virtual Environment design templates</p>
                                <p className="what-p"> Certificate of completion</p>
                                <p className="what-p"> 24X7 Assistance</p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <img src={Banner4} alt="img" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}