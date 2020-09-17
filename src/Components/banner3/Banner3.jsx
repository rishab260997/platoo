import React from 'react';
import './Banner3.css';
import logo from '../../assets/Banner3.jpg';
import Banner3_1 from '../../assets/Banner3_1.jpg';
import Banner3_2 from '../../assets/Banner3_2.jpg';
import Banner3_4 from '../../assets/Banner3_4.jpg';
import { Container, Row, Col } from 'react-bootstrap';

export default function Banner3() {
    return <div className="banner3">
        <Container>
            <Row>
                <Col><h3>Platoo does one thing</h3>
                    <h1 style={{textAlign:"left", color:"black", paddingTop:"0"}}>EMPOWERS!</h1><br /><br />
                    <h6>With its ready-to-use virtual event application,<br />
            Platoo is making virtual event platforms accessible, like never before.
        </h6><p></p>
                    <p>With our 5 hour module, you can learn how to develop a virtual platform,<br />
            operate it, and eventual host virtual events. In short, Learn. Make. Earn.
        </p>
                    <p>
                        By the end of our module, you'll be able to develop a platform on which you can<br />
            host webinars, trade shows, conferences, exhibitions and other business events.
        </p>
                    <p>
                        And for this you need not be a techy!
        </p></Col>
                <Col md="auto">
                    <img src={Banner3_1} /><img src={Banner3_2}/>
                </Col>
            </Row>
            <br /><br /><br />
            <h2 style={{textAlign:"center", color:"#CF502B"}}>"If you know how to operate your social media accounts
            <br/> 
            you can make a virtual platform at Platoo"<br/>
            <img style={{paddingTop:"0"}} src={Banner3_4}/></h2>
            
        </Container>
    </div>
}