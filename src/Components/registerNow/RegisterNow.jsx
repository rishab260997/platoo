import React from 'react';
import Register1 from '../../assets/register1.png';
import { Row, Col, Container } from 'react-bootstrap';

export default function RegisterNow() {
    return (
        <div>
            <Row>
                <Col>
                <img style={{ float: "left" }} src={Register1} />
                </Col>
                <Col >
                <h3 style={{paddingTop:"40%", float:"left", color:"#f17527"}}>Want to know more?</h3><br/>
                <h4 style={{float:"left", textAlign:"left"}}>Reach out to us on<br/><a style={{color:"#f17527"}}>hello@platoo.in</a></h4>
                </Col>
                <Col>
                    <button 
                    style={{
                        marginTop:"40%", 
                        background:"black",
                        color:"white",
                        border:"none",
                        borderRadius:"50px",
                    }}
                        ><h3 style={{color:"white", padding:"20px"}}>Register Now</h3></button>
                </Col>
            </Row>
        </div>

    )
}