import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Learn.css'
import l1 from '../../assets/l1.png'
import l2 from '../../assets/l2.png'
import l3 from '../../assets/l3.png'
import i1 from '../../assets/i1.png'
function Learn() {
    return (
        <div className="learn">
            <Container>
                <p className="adv-headings"> Learn </p>
                <Row>
                    <Col sm={4} md={4} >
                        <div className="columns columns1 ">
                            <img src={l1} alt="img" className="le-img" />
                            <p className="le-p">
                                Develop and customize a virtual
                                platform. Including creating Lobby
                                and help Desk, Auditorium and
                                Break-out sessions, Exhibition on Area
                                and Stands, Engagement Area.
                        </p>
                        </div>
                    </Col>
                    <Col sm={4} md={4} >
                        <div className="columns columns2 ">
                            <img src={l2} alt="img" className="le-img" />
                            <p className="le-p">
                                Server requirements, white labelling
                                and hosting plans
                        </p>
                        </div>
                    </Col>
                    <Col sm={4} md={4} >
                        <div className="columns columns3 ">
                            <img src={l3} alt="img" className="le-img" />
                            <p className="le-p"> Host Live virtual events. </p>
                        </div>
                    </Col>
                </Row>
                <br />
                <p className="adv-headings"> Integrate </p>
                <Row>
                    <img className="zoom" src={i1} alt="img"/>
                </Row>
            </Container>
        </div>
    )
}
export default Learn
