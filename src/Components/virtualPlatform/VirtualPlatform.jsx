import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner4 from '../../assets/Banner4.png';
import Banner4_1 from '../../assets/Banner4_1.png';
import Banner4_2 from '../../assets/Banner4_2.png';


export default function VirtualPlatform() {
    return (
        <div>
            <div className="container">
                <h1 style={{ textAlign: "left", color: "#dd5526", paddingTop:"20%" }}>VIRTUAL <br /> PLATFORM MODULE</h1>
            </div>
            <Container>
                <Row>
                    <Col sm={7}>
                        <h4 style={{ textAlign: "left" }}>Develop your virtual Platform</h4>
                        <Row>
                            <Col xs={2} md={1}>
                                <span style={{ paddingTop: "0" }}><img src={Banner4_1} /></span>
                            </Col>
                            <Col xs={6} md={2}>
                                <span style={{ verticalAlign: "left", paddingTop: "2%" }}>
                                    Duration:<br />
                                    <b>5 hours</b>
                                </span>
                            </Col>
                            <Col xs={2} md={1}>
                                <span style={{ paddingTop: "0" }}><img src={Banner4_2} /></span>
                            </Col>

                            <Col xs={6} md={4}>
                                <span style={{ verticalAlign: "left", textAlign: "left" }}>
                                    Starting from<br />
                                    <b>Friday, 25th Sept 2020</b>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 style={{textAlign:"left", paddingTop:"7%"}}><b>What's included:</b></h5>
                                <p style={{textAlign:"left"}}> Access to online sessions</p>
                                <p style={{textAlign:"left"}}> Sub-domain access for practice and hosting demos (for 3 months)</p>
                                <p style={{textAlign:"left"}}> Virtual Environment design templates</p>
                                <p style={{textAlign:"left"}}> Certificate of completion</p>
                                <p style={{textAlign:"left"}}> 24X7 Assistance</p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col sm={1}>
                        <img style={{paddingTop:"0", float:"left"}} src={Banner4} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}