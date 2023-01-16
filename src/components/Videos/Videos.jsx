import React, { Component, Fragment } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import parse from "html-react-parser";

export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      videoDesc: '...',
      videoUrl: "..."
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  componentDidMount() {
    RestClient.getRequest(AppUrl.VideoDesc).then(result => {
      this.setState({ videoDesc: result[0]['video_description'],videoUrl: result[0]['video_url'] });
    });
  }
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">Our Videos</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="my-auto">
              <div className="video-desc">
              {parse(this.state.videoDesc)}
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="my-auto">
              <div className="videoCard text-center">
                <span className="sum_icon" onClick={this.handleShow}>
                  <i class="fa-solid fa-video-slash"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Player src={this.state.videoUrl}>
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}
