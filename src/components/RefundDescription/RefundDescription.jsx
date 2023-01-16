import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import parse from "html-react-parser";

export default class RefundDescription extends Component {
  constructor() {
    super();
    this.state = {
      Refund: '...',
    }
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.infoDetails).then((result) => {
      this.setState({ Refund: result[0]["refund"] });
    });
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12} className="mt-5">
              <h4 className="Service-name">
                Eligibility for Refunds and Exchanges
              </h4>
              <hr />
              <p className="service-desc">
              {parse(this.state.Refund)}
              </p>
              <h4 className="Service-name pt-3">
                Partial refunds are granted (if applicable)
              </h4>
              <hr />
              <p className="service-desc">
              {parse(this.state.Refund)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
