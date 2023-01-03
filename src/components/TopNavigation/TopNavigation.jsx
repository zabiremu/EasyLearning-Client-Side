import React, { Component, Fragment } from "react";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
               
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Home</Nav.Link>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#deets">Service</Nav.Link>
                <Nav.Link href="#deets">Courses</Nav.Link>
                <Nav.Link href="#deets">Portfolio</Nav.Link>
                <Nav.Link href="#deets">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
