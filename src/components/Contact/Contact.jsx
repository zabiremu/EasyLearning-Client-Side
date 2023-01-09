import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={6} className="mt-5">
            <h4 className="Service-name m-0 pb-3">Quick Contact</h4>  
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Your Message</Form.Label>
                <Form.Control type='text' as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
        Submit
      </Button>
            </Col>
            <Col lg={6} md={6} sm={6} className="mt-5">
              <div className="">
                <h4 className="Service-name m-0 pb-3">Address</h4>
                <div className="footer_content">
                  <p className="service-desc p-0">
                    320 Polmart Road National Pike Caston Villa
                  </p>
                  <p className="service-desc p-0">
                    <span>
                      <i
                        class="fa-solid fa-envelope"
                        style={{ paddingRight: "8px" }}
                      ></i>
                    </span>
                    Email: support@gmail.com
                  </p>
                  <p className="service-desc p-0">
                    <span>
                      <i
                        class="fa-solid fa-square-phone"
                        style={{ paddingRight: "8px" }}
                      ></i>
                    </span>
                    Phone: 123234322
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
