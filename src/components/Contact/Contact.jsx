import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import LoadIcon from "../LoadIcon/loadIcon";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      address: "...",
      email: "...",
      phone: "...",
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.getRequest(AppUrl.footerDetails).then((result) => {
      this.setState({
        address: result[0]["address"],
        email: result[0]["email"],
        phone: result[0]["phone"],
        loading: false,
      });
    });
  }

  formSubmit = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let data = { name: name, email: email, message: message };
    RestClient.postRequest(AppUrl.contact, JSON.stringify(data))
      .then((result) => {
        alert("Thanks For Sending Message");
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    if (this.state.loading == true) {
      return <LoadIcon />;
    } else {
      return (
        <Fragment>
          <Container>
            <Row>
              <Col lg={6} md={6} sm={6} className="mt-5">
                <h4 className="Service-name m-0 pb-3">Quick Contact</h4>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control id="name" type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    id="message"
                    type="text"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.formSubmit}
                >
                  Submit
                </Button>
              </Col>
              <Col lg={6} md={6} sm={6} className="mt-5">
                <div className="">
                  <h4 className="Service-name m-0 pb-3">Address</h4>
                  <div className="footer_content">
                    <p className="service-desc p-0">{this.state.address}</p>
                    <p className="service-desc p-0">
                      <span>
                        <i
                          class="fa-solid fa-envelope"
                          style={{ paddingRight: "8px" }}
                        ></i>
                      </span>
                      Email: {this.state.email}
                    </p>
                    <p className="service-desc p-0">
                      <span>
                        <i
                          class="fa-solid fa-square-phone"
                          style={{ paddingRight: "8px" }}
                        ></i>
                      </span>
                      Phone:{this.state.phone}
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
}
