import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="footer_section">
          <Row>
            <Col lg={3} md={6} sm={12}>
                <h4 className="footer_Name">Follow Us</h4>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
            </Col>
            <Col lg={3} md={6} sm={12}><h4 className="footer_Name">Address</h4></Col>
            <Col lg={3} md={6} sm={12}><h4 className="footer_Name">Information</h4></Col>
            <Col lg={3} md={6} sm={12}><h4 className="footer_Name">Policy</h4></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
