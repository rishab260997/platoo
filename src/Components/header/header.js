import React from 'react';
import logo from './logo.png';
import styles from './header.css';
import { Link } from "react-router-dom";
import { Nav,Navbar,NavDropdown,Container, Row, Col, Button } from 'react-bootstrap';

export default function header(props) {
    // const handleSignIn =() => {
    //   props.history.push( `https://admin.platoo.in/`)
    // }
    return (
        <div className="hdr" id="#home">
             <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><img className="header" src={logo} alt="Platoo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav >
                    <Nav.Link className="link " href="#home">Home</Nav.Link>
                    <Nav.Link className="link" href="#platoo">Platoo</Nav.Link>
                    <Nav.Link className="link" href="#feature">Features</Nav.Link>
                    <Nav.Link href="https://platoo.in/register-corporate.php" className="link" href="#register">Register</Nav.Link>
                    <Nav.Link className="link" href="https://platoo.freshsales.io/web_forms/cab034270477a681e5466156342d660733976dd2bc2c95e82e7b5779b7e0f367/form.html" target="_blank">Free Workshop</Nav.Link>

                    <Nav.Link className="link" href="#register" target="">Contact us</Nav.Link>
                    <Nav.Link className="link" href="#"></Nav.Link>

                    <Nav.Link href="https://admin.platoo.in/" target="_blank"><button className="butt2" target="">Sign In</button></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        </div>

    )

}