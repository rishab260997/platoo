import React from 'react';
import logo from './logo.png';
import styles from './header.css';
import { Nav,Navbar,NavDropdown,Container, Row, Col, Button } from 'react-bootstrap';

export default function header() {
    return (
        <div>
        <Container>
             <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><img className="header" src={logo} alt="Platoo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav >
                    <Nav.Link className="link" href="#">Home</Nav.Link>
                    <Nav.Link className="link" href="#">Platoo</Nav.Link>
                    <Nav.Link className="link" href="#">Features</Nav.Link>
                    <Nav.Link className="link" href="#">Register</Nav.Link>
                    <Nav.Link className="link" href="#">Contact us</Nav.Link>
                    <Nav.Link className="link" href="#"></Nav.Link>

                    <button className="butt2">Sign In</button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
        
        </div>

    )

}