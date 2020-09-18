import React from 'react';
import './Banner3.css';
import logo from '../../assets/Banner3.jpg';
import Banner3_1 from '../../assets/Banner3_1.png';
import Banner3_2 from '../../assets/Banner3_2.jpg';
import Banner3_4 from '../../assets/Banner3_4.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import Banner3_0 from '../../assets/Banner3_0.png';

export default function Banner3() {
    return <div className="banner3">
        <img className="Banner30" src={Banner3_0}/>
        <Container>
        
            <Row>
            <Col xs={ 12} sm={12} md= {7} >
                <h3 className="h3">Platoo does one thing</h3>
                    <h1 className="hg1" >EMPOWERS!</h1><br />
                    <h6 className="para1">With its ready-to-use virtual event application,<br />
            Platoo is making virtual event platforms accessible, like never before.
        </h6><p></p>
                    <p className="para">With our 5 hour module, you can learn how to develop a virtual platform,<br />
            operate it, and eventual host virtual events. In short, Learn. Make. Earn.
        </p>
                    <p className="para">
                        By the end of our module, you'll be able to develop a platform on which you can<br />
            host webinars, trade shows, conferences, exhibitions and other business events.
        </p>
                    <p className="para">
                        And for this you need not be a techy!
        </p></Col>
                <Col  xs = {12} sm = { 9} md= {5}>
                    <img className="Banner31" src={Banner3_1} />
                </Col>
            </Row>
            <br /><br /><br />
            <h2 className="hg2" >"If you know how to operate your social media accounts
            <br/> 
            you can make a virtual platform at Platoo"<br/></h2>
            <img className="bnr34" src={Banner3_4}/>
            
        </Container>
    </div>
}