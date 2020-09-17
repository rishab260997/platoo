import React from 'react';
import logo from './logo.png';
import styles from './header.css';
import { Nav,Navbar,NavDropdown,Container, Row, Col, Button } from 'react-bootstrap';

export default function header() {
    return (
        <div>
        <Container>
             <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><img className="img" src={logo} alt="Platoo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav className="link">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Platoo</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Register</Nav.Link>
                    <Button className="butt2">Sign In</Button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
        
        </div>

    )

}