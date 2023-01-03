import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
export default class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="summary p-0">
          <Container className="text-center">
            <Row>
              <Col lg={8} md={12} sm={12}>
                <Row className="Summary_wrapper">
                  <Col lg={4} md={4} sm={4}>
                    <h1 className="summary_title">35000</h1>
                    <h4 className="summary_details">Students Worldwide</h4>
                    <hr className="text-light w-25 mx-auto" style={{ height:'3px' }} />
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <h1 className="summary_title">22</h1>
                    <h4 className="summary_details">Course Published</h4>
                    <hr className="text-light w-25 mx-auto" style={{ height:'3px' }} />
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <h1 className="summary_title">3000</h1>
                    <h4 className="summary_details">Students Reviews</h4>
                    <hr className="text-light w-25 mx-auto" style={{ height:'3px' }} />
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
