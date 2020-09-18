import React from 'react';
import './Advantage.css'
// import graphic1 from '../assets/graphic1.png'
import { Container, Row, Col } from 'react-bootstrap'
function Advantage() {
    return (
        <div className="advantage">
            <Container>
                <h1 className="adv-heading"> Platoo ADVANTAGE</h1>
                <Row>
                    <Col  xs={12} sm={5} className="col-org">
                        <p className="for-org"> FOR ORGANISATIONS</p>
                        <ul className="for-org-ul">
                            <li> Build your own platform <br /> hassle free </li>
                            <li> Honestly Priced and <br /> Dependable </li>
                            <li> User Friendly Interface  </li>
                            <li> Host Events at your <br /> convenience </li>
                            <li> Create customised demos in <br /> no time and cost </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={5} className="col-ind">
                        <p className="for-ind"> FOR INDIVIDUALS</p>
                        <ul className="for-org-ul2">
                            <li> Learn the 'mandatory' <br /> technology </li>
                            <li> Develop a virtual platform for <br /> yourself </li>
                            <li> Conduct virtual events for <br /> clients at the comfort of your <br /> home  </li>
                            <li> Host Events at your <br /> convenience </li>
                            <li> Create customised demos in <br /> no time and cost </li>
                            <li> Host virtual events and earn! </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Advantage;