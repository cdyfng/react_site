import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
            <Navbar.Brand href="/">MyCrypto</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            // <Navbar default collapseOnSelect>
            // <Navbar.Brand href="/">CodeLife</Navbar.Brand>
            // <Navbar.Toggle aria-controls="basic-navbar-nav" />
            // <Navbar.Collapse>
            //     <Nav pullRight>
            //         <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            //         Home
            //         </NavItem>
            //         <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
            //         About
            //         </NavItem>
            //         <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
            //         News
            //         </NavItem>
            //     </Nav>
            // </Navbar.Collapse>
            // </Navbar>
            // <Navbar default collapseOnSelect>

            // <Navbar.Collapse>
            //   <Nav pullRight>
            //     <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            //       Home
            //     </NavItem>
            //     <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
            //       About
            //     </NavItem>
            //     <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
            //       News
            //     </NavItem>
            //   </Nav>
            // </Navbar.Collapse>
            // </Navbar>
        )
    }
}
