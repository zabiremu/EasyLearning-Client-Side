import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ecoomerceIcon from "../../assets/image/ecommerce.png";
import design from "../../assets/image/design.png";
import web from "../../assets/image/web.png";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class Services extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.allServices).then(result=>{
      this.setState({myData:result})
    })
  }
  render() {
    const MyData =  this.state.myData;
    const Data  = MyData.map(result=>{
      return  <Col lg={4} md={6} sm={12}>
      <div className="Service-card text-center">
        <img src={result.service_img} alt="" className="ecoomerceIcon" />
        <h2 className="Service-name">{result.service_name}</h2>
        <p className="service-desc">
         {result.service_description}
        </p>
      </div>
    </Col>
    })
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">My Services</h1>
          <div className="bottom"></div>
          <Row className="mx-auto">
           {Data}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
