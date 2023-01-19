import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ecoomerceIcon from "../../assets/image/ecommerce.png";
import design from "../../assets/image/design.png";
import web from "../../assets/image/web.png";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";

export default class AllServices extends Component {
  constructor() {
    super();
    this.state = {
      AllData: [],
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.AllServices).then((result) => {
      this.state({
        AllData: result,
      });
    });
  }
  render() {
    const list = this.state.AllData;
    const lists = list.map((result) => {
      return <Col lg={4} md={6} sm={12}>
          <div className="Service-card text-center">
            <img src={result.service_img} alt="" className="ecoomerceIcon" />
            <h2 className="Service-name">{result.service_name}</h2>
            <p className="service-desc">
            {result.service_description}
            </p>
          </div>
        </Col>
      
    });

    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">My Services</h1>
          <div className="bottom"></div>
          <Row className="mx-auto">
            {lists}
            {/* <Col lg={4} md={6} sm={12}>
              <div className="Service-card text-center">
                <img src={ecoomerceIcon} alt="" className="ecoomerceIcon" />
                <h2 className="Service-name">Ecommerce</h2>
                <p className="service-desc">
                  I will design and develop ecommerce online store website
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="Service-card text-center">
                <img src={design} alt="" className="design" />
                <h2 className="Service-name">Web Design</h2>
                <p className="service-desc">
                  Qualified web design and attractive effects whichs catches
                  visitor's Eye
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="Service-card text-center">
                <img src={web} alt="" className="web" />
                <h2 className="Service-name">Web Development</h2>
                <p className="service-desc">
                  Clean and fresh issue free code to make your website dynamic
                  prefectly
                </p>
              </div>
            </Col> */}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
