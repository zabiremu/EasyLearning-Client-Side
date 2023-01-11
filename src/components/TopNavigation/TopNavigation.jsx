import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import React, { Component, Fragment } from "react";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WhiteLogo from '../../assets/image/logo_white.png'
import logoBlack from '../../assets/image/logo_black.png'
import { NavLink } from "react-router-dom";

export default class TopNavigation extends Component {
  constructor(props){
    super();
    this.state={
        NavTitle: "nav_title",
        logo:[WhiteLogo],
        background: 'background',
        navItem:'navItem',
        navVariant: 'dark',
        pageTitle:props.title,
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
    let activeStyle = {
      color: "#ffd900",
    };
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar className={this.state.background} collapseOnSelect expand="md"  variant={this.state.navVariant} fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home" className={this.state.NavTitle}><img src={this.state.logo} alt="" className="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
               
              </Nav>
              <Nav>
                <Nav.Link><NavLink to="/" className={this.state.navItem} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Home</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/about" className={this.state.navItem} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>About</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/all-services" className={this.state.navItem} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Service</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/all-courses" className={this.state.navItem} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Courses</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/all-projects" className={this.state.navItem} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Portfolio</NavLink></Nav.Link>
                 <Nav.Link><NavLink to="/contact-with-us" className={this.state.navItem} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Contact Us</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
