import React, { Fragment, Component } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import pdetails1 from "../../assets/image/brainstorm-meeting.jpg";
import pdetails2 from "../../assets/image/woman-attending-online-class.jpg";
import pdetails3 from '../../assets/image/guy-lesson_1098-14193.webp'
import pdetails4 from '../../assets/image/discussing-video-course.jpg'
export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">Recent Projects</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row className="mb-3">
                <Col lg={6} md={6} sm={6}>
                  <img src={pdetails1} alt="" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <h5 className="Service-name">Laravel 9</h5>
                  <p className="service-desc">
                    Some quick example text to build on the Project Name One and
                    make up the bulk of the card's content.
                  </p>
                  <a className="viewDetails" href="">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row className="mb-3">
                <Col lg={6} md={6} sm={6}>
                  <img src={pdetails2} alt="" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <h5 className="Service-name">React Js</h5>
                  <p className="service-desc">
                    Some quick example text to build on the Project Name One and
                    make up the bulk of the card's content.
                  </p>
                  <a className="viewDetails" href="">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row className="mb-3">
                <Col lg={6} md={6} sm={6}>
                  <img src={pdetails3} alt="" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <h5 className="Service-name">Mern Stack</h5>
                  <p className="service-desc">
                    Some quick example text to build on the Project Name One and
                    make up the bulk of the card's content.
                  </p>
                  <a className="viewDetails" href="">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row className="mb-3">
                <Col lg={6} md={6} sm={6}>
                  <img src={pdetails4} alt="" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <h5 className="Service-name">PHP with Laravel</h5>
                  <p className="service-desc">
                    Some quick example text to build on the Project Name One and
                    make up the bulk of the card's content.
                  </p>
                  <a className="viewDetails" href="">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
