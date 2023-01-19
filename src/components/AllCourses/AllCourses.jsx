import React, { Fragment, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";

export default class AllCourses extends Component {
  constructor() {
    super();
    this.state = {
      AllData: [],
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.allcourse).then(result => {
      this.setState({ AllData: result });
    });
  }
  render() {
    const DataList = this.state.AllData;
    const Data = DataList.map(result=>{
      return <Col lg={6} md={6} sm={12}>
      <Row className="mb-3">
        <Col lg={6} md={6} sm={6}>
          <img src={result.short_img} alt="" />
        </Col>
        <Col lg={6} md={6} sm={6}>
          <h5 className="Service-name">{result.short_title}</h5>
          <p className="service-desc">
          {result.short_description}
          </p>
          <NavLink className="viewDetails" to={"/course-details/"+result.id}>
            View Details
          </NavLink>
        </Col>
      </Row>
    </Col>
    })
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">Recent Courses</h1>
          <div className="bottom"></div>
          <Row>
            {Data}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
