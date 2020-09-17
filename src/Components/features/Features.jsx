import React from 'react';
import './Features.css'
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f1.png';
import f3 from '../../assets/f1.png';
import f4 from '../../assets/f1.png';
import f5 from '../../assets/f1.png';
import { Container, Row, Col } from 'react-bootstrap'
export default function Features() {
    return (
        <div className="features">
            <br />
            <Container>
                <p className="feat-heading" > Platoo FEATURES</p>
                <Row>
                    <Col xs={12} sm={5} md={5} lg={2} className="cols">
                        <img src={f2} className="img-feat" alt="f" />
                        <p className="p1-feat"> DEPENDABLE </p>
                        <p className="p2-feat">
                           No more looking for  <br />
                            vendors,or struggling <br />
                            for slots . host any <br />
                            number of events,any <br />
                            day, any time at your <br />
                            convenience.
                      </p>
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={2} className="cols">
                        <img src={f1} className="img-feat" alt="f" />
                        <p className="p1-feat"> EXTENDABLE </p>
                        <p className="p2-feat">
                            Host a webiner, <br />
                            exhibition,annual <br />
                            conference, or a trade <br />
                            show,etc on Platoo <br />
                            without any hassle. Just <br />
                            decide the event <br />
                            format and start
                      </p>
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={2} className="cols">
                        <img src={f3} className="img-feat" alt="f" />
                        <p className="p1-feat"> FULLY <br/> CUSTOMISABLE </p>
                        <p className="p2-feat">
                            Brand your event <br />
                            according to your <br />
                            brand guidelines. In <br />
                            case you have had a <br />
                            typical stage design, <br />
                            you can get the same <br />
                            here. Ask us how:)
                      </p>
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={2} className="cols">
                        <img src={f4} className="img-feat" alt="f" />
                        <p className="p1-feat"> SIMPLE <br/> USER INTERFACE </p>
                        <p className="p2-feat">
                            Designed specifically <br />
                            for non tech people, <br />
                            Platoo has a very user <br />
                            friendly interface which <br />
                            is easy to navigate and <br />
                            understand.
                      </p>
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={2} className="cols">
                        <img src={f5} className="img-feat" alt="f" />
                        <p className="p1-feat"> RUNS ON <br/> ALL DEVICES </p>
                        <p className="p2-feat">
                            Platoo is device <br />
                            compatible and runs <br />
                            on all media devices. <br />
                            The only thing you <br />
                            have to ensure is -  <br />
                            internet connection.
                      </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
