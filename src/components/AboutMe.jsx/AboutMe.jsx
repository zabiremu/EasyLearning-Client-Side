import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../assets/image/fotor_2023-1-7_15_24_7.png";

export default class AboutMe extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">About Me</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="about_img">
                <img src={face} alt="" className="face" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div></div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
