import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import LoadIcon from "../LoadIcon/loadIcon";
import parse from "html-react-parser";

export default class AllServices extends Component {
  constructor() {
    super();
    this.state = {
      AllData: [],
      loading: true,
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.allServices).then((result) => {
      this.setState({
        AllData: result, loading: false});
    });
  }
  render() {
    if (this.state.loading == true) {
      return <LoadIcon />
    } else {
      const list = this.state.AllData;
      const lists = list.map((result) => {
        return  <Col lg={4} md={6} sm={12}>
            <div className="Service-card text-center">
              <img src={result.service_img} alt="" className="ecoomerceIcon" />
              <h2 className="Service-name">{result.service_name}</h2>
              <p className="service-desc text-center">{parse(result.service_description)}</p>
            </div>
          </Col>
        
      });

      return (
        <Fragment>
          <Container>
            <h1 className="service_title text-center">My Services</h1>
            <div className="bottom"></div>
            <Row className="mx-auto">{lists}</Row>
          </Container>
        </Fragment>
      );
    }
  }
}
