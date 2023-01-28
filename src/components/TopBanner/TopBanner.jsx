import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import LoadIcon from "../LoadIcon/loadIcon";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subTitle: "",
      loaderClass: "text-center",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.TopTitle)
      .then((res) => {
        this.setState({
          title: res[0]["home_title"],
          subTitle: res[0]["home_sub_title"],
          loaderClass: "d-none",
          mainDiv: "text-center",
        });
      })
      .catch((error) => {
        this.setState({ title: "???", subTitle: "???" });
      });
  }
  render() {
    return (
      <Fragment>
        <Container fluid className="top-banner p-0 h-100">
          <Row className="align-items-center justify-content-center h-100 m-0">
            <Col className="p-0" lg="12">
              <Col lg={12} className={this.state.loaderClass}>
                <LoadIcon className="p-0"/>
              </Col>
            </Col>
           <Col className={this.state.mainDiv}>
             <Col className="top-content text-center">
                 <Fade top>
                   <h1 className="top-Title">{this.state.title}</h1>
                   <h4 className="top-sub-Title">{this.state.subTitle}</h4>
                   <button className="btn btn-primary">Learn More</button>
                 </Fade>
             </Col>
           </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
