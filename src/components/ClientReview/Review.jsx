import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import clientProfile from "../../assets/image/face.png";

export default class Review extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="review">
          <h1 className="review_title text-center">Testimoinal</h1>
          <div className="review_bottom"></div>
          <Row className="justify-content-center">
            <Col lg={6} md={6} sm={12} >
              <div className="">
                <img src={clientProfile} alt="" className="client_profile" />
                <h2 className="client_name">Jhon Doe</h2>
                <p className="review-desc text-center">Perfect!!!!! Zabir was very nice and helpful and also professional with completing my design for my landing page.I’m new to the entrepreneur world and he just make me feel like I can take this world on with much more confidence.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
