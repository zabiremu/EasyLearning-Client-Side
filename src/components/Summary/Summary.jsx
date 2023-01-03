import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
export default class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="summary p-0">
          <Container>
            <Row>
              <Col lg={8} md={12} sm={12}>
                <Row>
                  <Col lg={4} md={4} sm={4}>
                    One
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    Two
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    Three
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={12} sm={12}></Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}
