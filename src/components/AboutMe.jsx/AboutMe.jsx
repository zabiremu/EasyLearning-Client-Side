import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../assets/image/fotor_2023-1-7_15_24_7.png";
import { init } from 'ityped'
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

export default class AboutMe extends Component {
  componentDidMount(){
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Web Developer', 'Software Engineer' ] })
  }
  render() {
    return (
      <Fragment>
        <Container>
        <LightSpeed right>
          <h1 className="service_title text-center">About Me</h1>
        </LightSpeed>    
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="about_img">
                <img src={face} alt="" className="face" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Fade right>
              <div className="about_content">
                <h2 className="about_details">Hi, There I'm</h2>
                <h2 className="about_title">Zabir Raihan</h2>
                <h3 className="about_para">Work as <span id="myElement"></span></h3>
              </div>
            </Fade>  
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
