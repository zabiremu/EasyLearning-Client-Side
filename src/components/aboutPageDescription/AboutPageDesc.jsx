import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import parse from 'html-react-parser';

export default class AboutPageDesc extends Component {
  constructor(){
    super();
    this.state={
      aboutDesc: '...',
      refund: '...',
      terms: '...',
      privacy: '...',
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.infoDetails).then(result=>{
      this.setState({aboutDesc:result[0]['about'],refund:result[0]['refund'],terms:result[0]['terms'],privacy:[0]['privacy']})
    })
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="mt-5">
              <h4 className="Service-name">Who I Am</h4>
              <p className="service-desc">
              {parse(this.state.aboutDesc)}
              </p>
            </Col>
            <Col lg={12} md={12} sm={12} className="mt-3">
              <h4 className="Service-name">Our Mission</h4>
              <p className="service-desc">  {parse(this.state.aboutDesc)}</p>
            </Col>
            <Col lg={12} md={12} sm={12} className="mt-3">
              <h4 className="Service-name">Our Vision</h4>
              <p className="service-desc"> {parse(this.state.aboutDesc)}</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

