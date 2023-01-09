import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import React, { Component, Fragment } from "react";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WhiteLogo from '../../assets/image/logo_white.png'
import logoBlack from '../../assets/image/logo_black.png'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
export default class TopNavigation extends Component {
  constructor(){
    super();
    this.state={
        NavTitle: "nav_title",
        logo:[WhiteLogo],
        background: 'background',
        navItem:'navItem',
        navVariant: 'dark'
    }
  }  
  onScroll = () =>{
    if(window.scrollY>100){
        this.setState({NavTitle:'nav_scroll',logo:[logoBlack],background:'background_scroll',navItem:'navItem_scroll',navVariant:'light'})
    }else{
        this.setState({NavTitle:'nav_title',logo:[WhiteLogo],background:'background', navItem:'navItem',navVariant:'dark'})
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',this.onScroll)
  }

  render() {
    return (
      <Fragment>
        <Navbar className={this.state.background} collapseOnSelect expand="md"  variant={this.state.navVariant} fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home" className={this.state.NavTitle}><img src={this.state.logo} alt="" className="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
               
              </Nav>
              <Nav>
                <Nav.Link><NavLink to="/" className={this.state.navItem}>Home</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/About" className={this.state.navItem}>About</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/All-Services" className={this.state.navItem}>Service</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/All-Courses" className={this.state.navItem}>Courses</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/All-Projects" className={this.state.navItem}>Portfolio</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/Contact-With-Us" className={this.state.navItem}>Contact Us</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
