import React from 'react';
import './Features.css'
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';
import f5 from '../../assets/f5.png';
import { Container, Row, Col } from 'react-bootstrap'
export default function Features() {
    return (
        <div className="features" id="feature">
            <br />
            <Container>
                <p className="feat-heading" > Platoo FEATURES</p>
                <Row>
                    <Col xs={12} sm={12} md={5} lg={2} className="cols">
                        <img src={f2} className="img-feat" alt="f" />
                        <p className="p1-feat"> DEPENDABLE </p>
                        <p className="p2-feat">
                           No more looking for  
                            vendors,or struggling 
                            for slots . host any 
                            number of events,any 
                            day, any time at your 
                            convenience.
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={2} className="cols">
                        <img src={f1} className="img-feat" alt="f" />
                        <p className="p1-feat"> EXTENDABLE </p>
                        <p className="p2-feat">
                            Host a webiner, 
                            exhibition,annual 
                            conference, or a trade 
                            show,etc on Platoo 
                            without any hassle. Just 
                            decide the event 
                            format and start
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={2} className="cols">
                        <img src={f3} className="img-feat" alt="f" />
                        <p className="p1-feat"> FULLY <br/> CUSTOMISABLE </p>
                        <p className="p2-feat">
                            Brand your event 
                            according to your 
                            brand guidelines. In 
                            case you have had a 
                            typical stage design, 
                            you can get the same 
                            here. Ask us how:)
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={2} className="cols">
                        <img src={f4} className="img-feat" alt="f" />
                        <p className="p1-feat"> SIMPLE <br/> USER INTERFACE </p>
                        <p className="p2-feat">
                            Designed specifically 
                            for non tech people, 
                            Platoo has a very user 
                            friendly interface which 
                            is easy to navigate and 
                            understand.
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={2} className="cols">
                        <img src={f5} className="img-feat" alt="f" />
                        <p className="p1-feat"> RUNS ON <br/> ALL DEVICES </p>
                        <p className="p2-feat">
                            Platoo is device 
                            compatible and runs 
                            on all media devices. 
                            The only thing you 
                            have to ensure is -  
                            internet connection.
                      </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
