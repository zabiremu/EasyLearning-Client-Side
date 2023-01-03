import React, { Component, Fragment } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import CountUp from 'react-countup';
export default class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="summary p-0 mx-auto">
          <Container className="p-0 mx-auto h-100">
            <Row className="p-0 mx-auto align-items-lg-center justify-content-lg-center h-100">
              <Col lg={8} md={12} sm={12} className="text-center">
                <Row className="summary_content">
                  <Col lg={4} md={4} sm={4}>
                    <span className="sum_icon"><i class="fa-solid fa-globe"></i></span>
                    <h1 className="summary_title"><CountUp end={35000} duration={3}/></h1>
                    <h4 className="summary_details">Students Worldwide</h4>
                    <hr
                      className="text-light w-25 mx-auto"
                      style={{ height: "3px" }}
                    />
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                  <span className="sum_icon"><i class="fa-solid fa-laptop"></i></span>
                    <h1 className="summary_title"><CountUp end={22} duration={3}/></h1>
                    <h4 className="summary_details">Course Published</h4>
                    <hr
                      className="text-light w-25 mx-auto"
                      style={{ height: "3px" }}
                    />
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                  <span className="sum_icon"><i class="fa-solid fa-star"></i></span>
                    <h1 className="summary_title"><CountUp end={3000} duration={3}/></h1>
                    <h4 className="summary_details">Students Reviews</h4>
                    <hr
                      className="text-light w-25 mx-auto"
                      style={{ height: "3px" }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={12} sm={12}>
                <div className="mx-auto">
                  <Card className="Summary_card">
                    <Card.Body>
                      <Card.Title className="card_title">What I have Achieved</Card.Title>
                      <Card.Text>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Requirment Gathering</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>System Analysis</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Coding Testing</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Implementation</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}
