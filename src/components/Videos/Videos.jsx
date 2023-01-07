import React, { Component, Fragment } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";

export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
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
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">Our Videos</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="my-auto">
              <div className="video-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                <br />
                <br />
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint?
                <br />
                <br />
                Sed quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem!Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint?
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
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
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
