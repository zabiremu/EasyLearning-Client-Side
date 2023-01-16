import React, { Fragment, Component } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import pdetails1 from "../../assets/image/brainstorm-meeting.jpg";
import pdetails2 from "../../assets/image/woman-attending-online-class.jpg";
import pdetails3 from '../../assets/image/guy-lesson_1098-14193.webp'
import pdetails4 from '../../assets/image/discussing-video-course.jpg'
import { NavLink } from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class Courses extends Component {
  constructor(){
    super();
    this.state = {
      AllData : [],
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.homeCourse).then(result=>{
      this.setState({AllData:result})
    })
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
          <h5 className="Service-name">{result.	short_title}</h5>
          <p className="service-desc">
          {result.short_description}
          </p>
          <NavLink className="viewDetails" to="/course-details">
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
