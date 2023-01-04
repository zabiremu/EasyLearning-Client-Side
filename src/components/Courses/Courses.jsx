import React, { Fragment, Component } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";

export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">Recent Projects</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={6}></Col>
                <Col lg={6} md={6} sm={6}></Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={6}></Col>
                <Col lg={6} md={6} sm={6}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
