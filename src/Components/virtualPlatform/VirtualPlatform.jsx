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
                        <h4 className="dev-h"> Develop your Virtual platform</h4>
                        <Row>
                            <Col xs={12} md={6} sm={6}>
                                <Row>

                                    <Col xs={2} md={3}>
                                        <span><img src={Banner4_1} alt="img" /></span>
                                    </Col>

                                    <Col xs={8} md={9}>
                                        <p className="d5h">
                                            <b className="duration">Duration:</b><br />
                                            <b className="five-h" >5 hours</b>
                                        </p>
                                    </Col>

                                </Row>
                            </Col>
                            <Col xs={12} md={6} sm={6}>
                                <Row> <Col xs={2} md={3}>
                                    <span><img src={Banner4_2} alt="img" /></span>
                                </Col>
                                    <Col xs={8} md={9}>
                                        <p className="s5h">
                                            <b className="duration">Starting from:<br /></b>
                                            <b className="five-h" >Friday, 25th Sept 2020</b>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={12}>
                                <p className="what-h" >What's included:</p>
                                <ul className="tickul">

                                    <li className="what-li"> Access to online sessions</li>
                                    <li className="what-li li2"> Sub-domain access for practice and hosting demos (for 3 months)</li>
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