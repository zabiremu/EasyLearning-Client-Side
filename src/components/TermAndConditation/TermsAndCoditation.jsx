import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import parse from "html-react-parser";

export default class TermsAndCoditation extends Component {
  constructor() {
    super();
    this.state = {
      terms: "...",
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.infoDetails).then((result) => {
      this.setState({ terms: result[0]["terms"] });
    });
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12} className="mt-5">
              <h4 Service-name>Terms of Use</h4>
              <p className="service-desc">{parse(this.state.terms)}</p>

              <h4 Service-name>Accounts</h4>
              <p className="service-desc">{parse(this.state.terms)}</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
