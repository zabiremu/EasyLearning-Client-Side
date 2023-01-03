import React, { Component, Fragment } from "react";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import WhiteLogo from '../../assets/image/logo_white.png'
import logoBlack from '../../assets/image/logo_black.png'

export default class TopNavigation extends Component {
  constructor(){
    super();
    this.state={
        NavTitle: "nav_title",
        logo:[WhiteLogo],
        background: 'background'
    }
  }  
  onScroll = () =>{
    if(window.scrollY>100){
        this.setState({NavTitle:'nav_scroll',logo:[logoBlack],background:'background_scroll'})
    }else{
        this.setState({NavTitle:'nav_title',logo:[WhiteLogo],background:'background'})
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',this.onScroll)
  }

  render() {
    return (
      <Fragment>
        <Navbar className={this.state.background} collapseOnSelect expand="md"  variant="dark" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home" className={this.state.NavTitle}><img src={this.state.logo} alt="" className="logo"/></Navbar.Brand>
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
