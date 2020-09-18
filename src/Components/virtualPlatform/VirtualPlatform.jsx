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
                        <h4 className="dev-h"> Develop your virtual Platform</h4>
                        <Row>
                            <Col xs={12} md={4}>
                                <Row>
                                    <Col sm={3}>
                                        <span><img src={Banner4_1} alt="img" /></span>
                                    </Col>
                                    <Col sm={9}>
                                        <span>
                                            Duration:<br />
                                            <b className="five-h" >5 hours</b>
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={8}>
                                <Row> <Col sm={2}>
                                    <span><img src={Banner4_2} alt="img" /></span>
                                </Col>
                                    <Col sm={10}>
                                        <span>
                                            Starting from:<br />
                                            <b className="five-h" >Friday, 25th Sept 2020</b>
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="what-h" >What's included:</p>
                                <ul className="tickul">

                                    <li className="what-li"> Access to online sessions</li>
                                    <li className="what-li"> Sub-domain access for practice and hosting demos (for 3 months)</li>
                                    <li className="what-li"> Virtual Environment design templates</li>
                                    <li className="what-li"> Certificate of completion</li>
                                    <li className="what-li"> 24X7 Assistance</li>
                                </ul>
                            </Col>
                           
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <img className="Banr4" src={Banner4} alt="img" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}