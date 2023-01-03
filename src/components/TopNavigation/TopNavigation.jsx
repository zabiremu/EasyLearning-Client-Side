import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import React, { Component, Fragment } from "react";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WhiteLogo from '../../assets/image/logo_white.png'
import logoBlack from '../../assets/image/logo_black.png'

export default class TopNavigation extends Component {
  constructor(){
    super();
    this.state={
        NavTitle: "nav_title",
        logo:[WhiteLogo],
        background: 'background',
        navItem:'navItem',
    }
  }  
  onScroll = () =>{
    if(window.scrollY>100){
        this.setState({NavTitle:'nav_scroll',logo:[logoBlack],background:'background_scroll',navItem:'navItem_scroll'})
    }else{
        this.setState({NavTitle:'nav_title',logo:[WhiteLogo],background:'background', navItem:'navItem'})
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
                <Nav.Link href="#deets" className={this.state.navItem}>Home</Nav.Link>
                <Nav.Link href="#deets" className={this.state.navItem}>About</Nav.Link>
                <Nav.Link href="#deets" className={this.state.navItem}>Service</Nav.Link>
                <Nav.Link href="#deets" className={this.state.navItem}>Courses</Nav.Link>
                <Nav.Link href="#deets" className={this.state.navItem}>Portfolio</Nav.Link>
                <Nav.Link href="#deets" className={this.state.navItem}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
