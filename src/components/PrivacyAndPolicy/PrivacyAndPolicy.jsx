import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import parse from "html-react-parser";

export default class PrivacyAndPolicy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "...",
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.infoDetails).then((result) => {
      this.setState({ privacy: result[0]["privacy"] });
    });
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12} className="mt-5">
              <h4 Service-name>Privacy Policy</h4>
              <p className="service-desc">{parse(this.state.privacy)}</p>

              <h4 Service-name>Data You Provide to Us</h4>
              <p className="service-desc">{parse(this.state.privacy)}</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
