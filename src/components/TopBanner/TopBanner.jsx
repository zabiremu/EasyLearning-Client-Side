import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subTitle: "",
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.TopTitle)
      .then((res) => {
        this.setState({
          title: res[0]["home_title"],
          subTitle: res[0]["home_sub_title"],
        });
      })
      .catch((error) => {
        this.setState({ title: "???", subTitle: "???" });
      });
  }
  render() {
    return (
      <Fragment>
        <Container fluid className="top-banner p-0">
          <Row className="">
            <Col className="top-content text-center">
              <h1 className="top-Title">{this.state.title}</h1>
              <h4 className="top-sub-Title">{this.state.subTitle}</h4>
              <button className="btn btn-primary">Learn More</button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
